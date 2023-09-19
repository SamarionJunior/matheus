const getProdutos = state => state.produtos.produtos

// const getProductById = state => {
//     const produtoss = state.produtos.produtos
//     const produtosss = produtoss.filter(p => p.id === produto.id)
//     return produtosss
// }

const selectors = {
    getProdutos,
    // getProductById
}

export {selectors}