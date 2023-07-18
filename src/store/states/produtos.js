const INITIAL_STATE = {
    produtos: [
        {nome: "Produto 1", id: Math.random(), preco: 5, quantidade: 3, noCarrinho: 0, emProcessoDePagamento: 0, NosPedidos: 5, status: "Em Produção"},
        {nome: "Produto 2", id: Math.random(), preco: 3, quantidade: 5, noCarrinho: 0, emProcessoDePagamento: 0, NosPedidos: 5, status: "Em Produção"},
        {nome: "Produto 3", id: Math.random(), preco: 4, quantidade: 4, noCarrinho: 0, emProcessoDePagamento: 0, NosPedidos: 5, status: "Em Produção"}
    ]
}

export default INITIAL_STATE