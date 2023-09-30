const getProdutos = state => {
    console.log(state)
    console.log(state.produtos)
    console.log(state.produtos.produtos)
    return state.produtos
}
const getShoppingCar = state => state.shoppingcar
const getPaymentArea = state => state.paymentarea
const getOrder = state => state.order

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