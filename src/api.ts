const conta = {
    id: '1',
    email: 'test@dio.bank',
    password: 'senha123',
    name: 'Eu Mesmo da Silva',
    balance: 3535.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1500)
})
