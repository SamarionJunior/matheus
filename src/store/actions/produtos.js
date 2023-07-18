export function setProdutos(nome, quantidade, preco){
    return {
        type: "SET_PRODUTOS",
        nome,
        quantidade,
        preco
    }
}

export function setProdutosById(id, nome, quantidade, preco){
    return {
        type: "SET_PRODUTOS_ID",
        id,
        nome,
        quantidade,
        preco
    }
}

export function deleteProdutoById(id){
    return {
        type: "DELETE_PRODUTOS_ID",
        id
    }
}

export function setStatus(id, status){
    return {
        type: "SET_STATUS",
        id,
        status
    }
}

export function setCarrinho(id){
    return {
        type: "SET_CARRINHO",
        id
    }
}

export function getCarrinho(id){
    return {
        type: "GET_CARRINHO",
        id
    }
}

export function clearCarrinho(id){
    return {
        type: "CLEAR_CARRINHO",
        id
    }
}

export function setPagamento(produtos){
    return {
        type: "SET_PAGAMENTO",
        produtos
    }
}

export function getPagamento(produtos){
    return {
        type: "GET_PAGAMENTO",
        produtos
    }
}

export function setPedidos(produtos){
    return {
        type: "SET_PEDIDOS",
        produtos
    }
}

// export function getPedidos(produtos){
//     return {
//         type: "GET_PEDIDOS",
//         produtos
//     }
// }