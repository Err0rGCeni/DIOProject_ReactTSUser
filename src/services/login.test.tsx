import { login } from './login'

// Mock das funções e objetos necessários
const mockApi = {
    email: 'test@dio.bank',
    password: 'senha123',
}

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))

// Descreve um conjunto de testes para a função "login"
describe('login', () => {
    it('Deve retornar verdadeiro caso o email e senha sejam válidos', async () => {
        // Chama a função que será testada (login)
        const response = await login(mockApi.email, mockApi.password)
        // Verifica se a função retornou verdadeiro
        expect(response).toBeTruthy()
    })

    it('Deve retornar falso caso o email seja inválido', async () => {
        const response = await login('email@invalido.edu', mockApi.password)
        // Verifica se a função retornou falso
        expect(response).toBeFalsy()
    })

    it('Deve retornar falso caso a senha seja inválida', async () => {
        const response = await login(mockApi.email, 'senha_incorreta')
        // Verifica se a função retornou falso
        expect(response).toBeFalsy()
    })
})