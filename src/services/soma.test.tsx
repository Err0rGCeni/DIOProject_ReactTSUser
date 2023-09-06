import { soma, multiplica } from './soma'

// Início da suíte de testes para a função 'soma'
describe('soma', () => {
    // Teste individual: verifica se a função 'soma' adiciona corretamente 1 ao número informado
    it('deve somar 1 ao número informado', () => {
        // Chama a função 'soma' com argumento 1 e armazena o resultado na variável 'value'
        const value = soma(1)        
        // Usando 'expect' para criar uma asserção: verifica se o valor da variável 'value' é igual a 2
        expect(value).toBe(2)
    })

    it('deve multiplicar o número por dois', ()=>{
        const value = multiplica(2, 2)
        expect(value).toBe(4)
    })

    it('deve multiplicar o número por três', ()=>{
        const value = multiplica(2, 3)
        expect(value).toBe(6)
    })

    it('deve informar um erro, com multiplicador diferente de 2 ou 3', ()=>{
        const value = multiplica(2, 4)
        expect(value).toBe('Não aceito!')
    })
})
