const getProdutos = state => {
    return state.produtos
}
const getShoppingCar = state => {
    return state.shoppingcar
}
const getPaymentArea = state => {
    return state.paymentarea
}
const getOrder = state => {
    return state.order
}

// const getProductById = state => {
//     const produtoss = state.produtos.produtos
//     const produtosss = produtoss.filter(p => p.id === produto.id)
//     return produtosss
// }

const selectors = {
    getProdutos,
    getShoppingCar,
    getPaymentArea,
    getOrder
    // getProductById
}

export {selectors}