import INITIAL_STATE from "../states/produtos"

export default function produtos(state = INITIAL_STATE, action){
    if(action.type === 'SET_PRODUTOS'){
        const preco = action.preco
        const quantidade = action.quantidade
        const nome = action.nome
        const produtos = state.produtos
        const newProduto = {
            nome: nome, id: Math.random(), preco: preco, quantidade: quantidade, noCarrinho: 0, emProcessoDePagamento: 0, NosPedidos: 0, status: "Em Produção"
        }
        produtos.push(newProduto)

        const newProdutos = Object.assign([], produtos);

        return {
            ...state,
            produtos: [...newProdutos]
        }
    }
    if(action.type === 'SET_PRODUTOS_ID'){

        const id = action.id
        const preco = action.preco
        const quantidade = action.quantidade
        const nome = action.nome
        const produtos = state.produtos

        produtos.map(produto => {
            if(produto.id === id){
                produto.nome = nome
                produto.preco = preco
                produto.quantidade = quantidade
            }
            return produto
        })

        const newProdutos = Object.assign([], produtos);

        console.log(newProdutos)

        return {
            ...state,
            produtos: [...newProdutos]
        }
    }
    if(action.type === 'DELETE_PRODUTOS_ID'){

        const id = action.id

        const produtos = state.produtos

        const auxProdutos = produtos.filter(produto => produto.id !== id)

        const newProdutos = Object.assign([], auxProdutos);

        return {
            ...state,
            produtos: [...newProdutos]
        }
    }
    if(action.type === 'SET_STATUS'){

        const id = action.id
        const status = action.status
        const produtos = state.produtos
        
        const auxCarrinho = produtos.map(produto => {
            if(produto.id === id){
                produto.status = status
            }
            return produto
        })

        const newCarrinho = Object.assign([], auxCarrinho);

        return {
            ...state,
            produtos: [...newCarrinho]
        }
    }
    if(action.type === 'SET_CARRINHO'){

        const stateProdutos = state.produtos
        const actionId = action.id
        
        const auxCarrinho = stateProdutos.map(produto => {
            if(produto.id === actionId){
                if(produto.quantidade > 0){
                    produto.quantidade -= 1
                    produto.noCarrinho += 1
                }
            }
            return produto
        })

        const newCarrinho = Object.assign([], auxCarrinho);

        return {
            ...state,
            produtos: [...newCarrinho]
        }
    }
    if(action.type === 'GET_CARRINHO'){

        const stateProdutos = state.produtos
        const actionId = action.id
        
        const auxCarrinho = stateProdutos.map(produto => {
            if(produto.id === actionId){
                if(produto.noCarrinho > 0){
                    produto.quantidade += 1
                    produto.noCarrinho -= 1
                }
            }
            return produto
        })

        const newCarrinho = Object.assign([], auxCarrinho);

        return {
            ...state,
            produtos: [...newCarrinho]
        }
    }
    if(action.type === 'CLEAR_CARRINHO'){

        const stateProdutos = state.produtos
        
        const auxCarrinho = stateProdutos.map(produto => {
            if(produto.noCarrinho > 0){
                produto.quantidade += produto.noCarrinho
                produto.noCarrinho = 0
            }
            return produto
        })

        const newCarrinho = Object.assign([], auxCarrinho);

        return {
            ...state,
            produtos: [...newCarrinho]
        }
    }
    if(action.type === 'SET_PAGAMENTO'){

        const stateProdutos = state.produtos
        
        const auxCarrinho = stateProdutos.map(produto => {
            produto.emProcessoDePagamento += produto.noCarrinho
            produto.noCarrinho = 0
            return produto
        })

        const newCarrinho = Object.assign([], auxCarrinho);

        return {
            ...state,
            produtos: [...newCarrinho]
        }
    }
    if(action.type === 'GET_PAGAMENTO'){

        const stateProdutos = state.produtos
        
        const auxCarrinho = stateProdutos.map(produto => {
            produto.noCarrinho = produto.emProcessoDePagamento
            produto.emProcessoDePagamento = 0
            return produto
        })

        const newCarrinho = Object.assign([], auxCarrinho);

        return {
            ...state,
            produtos: [...newCarrinho]
        }
    }
    if(action.type === 'SET_PEDIDOS'){

        const stateProdutos = state.produtos
        
        const auxCarrinho = stateProdutos.map(produto => {
            produto.NosPedidos += produto.emProcessoDePagamento
            produto.emProcessoDePagamento = 0
            return produto
        })

        const newCarrinho = Object.assign([], auxCarrinho);

        return {
            ...state,
            produtos: [...newCarrinho]
        }
    }
    // if(action.type === 'GET_PEDIDOS'){

    //     const stateProdutos = state.produtos
        
    //     const newCarrinho = stateProdutos.map(produto => {
    //         produto.noCarrinho = produto.emProcessoDePagamento
    //         produto.emProcessoDePagamento = 0
    //         return produto
    //     })

    //     return {
    //         ...state,
    //         produtos: [...newCarrinho]
    //     }
    // }
    return state
}