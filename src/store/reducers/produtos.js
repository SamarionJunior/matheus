import { createReducer } from "@reduxjs/toolkit"

import INITIAL_STATE from "../states/produtos"

import {setState, setProdutos, setProdutosById, deleteProdutoById, setStatus, setCarrinho, getCarrinho, clearCarrinhoById, clearCarrinho, setPagamento, getPagamento, setPedidos} from "../actions/produtos"

export default createReducer(INITIAL_STATE, {
    [setState.type]: (state, action) => void({
        ...state, 
        produtos: [...Object.assign([], action.payload)]
    }),
    [setProdutos.type]: (state, action) => void({
        ...state, 
        produtos: [...Object.assign([], state.produtos.push({
            nome: action.nome,
            id: Math.random(),
            preco: action.preco,
            quantidade: action.quantidade,
            noCarrinho: 0,
            emProcessoDePagamento: 0,
            NosPedidos: 0,
            status: "Em Produção"
        }))]
    }),
    [setProdutosById.type]: (state, action) => void({
        ...state,
        produtos: [...Object.assign([], state.produtos.map(produto => {
            if(produto.id === action.id){
                produto.nome = action.nome
                produto.preco = action.preco
                produto.quantidade = action.quantidade
            }
            return produto
        }))]
    }),
    [deleteProdutoById.type]: (state, action) => void({
        ...state, 
        produtos: [...Object.assign([], state.produtos.filter(produto => 
            produto.id !== action.id
        ))]
    }),
    [setStatus.type]: (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
        if(produto.id === action.id){
            produto.status = action.status
        }
        return produto
    }))]}),
    [setCarrinho.type]: (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
        if(produto.id === action.payload){
            if(produto.quantidade > 0){
                produto.quantidade -= 1
                produto.noCarrinho += 1
            }
        }
        return produto
    }))]}),
    [getCarrinho.type]: (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
        if(produto.id === action.id){
            if(produto.noCarrinho > 0){
                produto.quantidade += 1
                produto.noCarrinho -= 1
            }
        }
        return produto
    }))]}),
    [clearCarrinhoById.type]: (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
        if(produto.id === action.id){
            if(produto.noCarrinho > 0){
                produto.quantidade += produto.noCarrinho
                produto.noCarrinho = 0
            }
        }
        return produto
    }))]}),
    [clearCarrinho.type]: (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
        if(produto.noCarrinho > 0){
            produto.quantidade += produto.noCarrinho
            produto.noCarrinho = 0
        }
        return produto
    }))]}),
    [setPagamento.type]: (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
        produto.emProcessoDePagamento += produto.noCarrinho
        produto.noCarrinho = 0
        return produto
    }))]}),
    [getPagamento.type]: (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
        produto.noCarrinho = produto.emProcessoDePagamento
        produto.emProcessoDePagamento = 0
        return produto
    }))]}),
    [setPedidos.type]: (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
        produto.NosPedidos += produto.emProcessoDePagamento
        produto.emProcessoDePagamento = 0
        return produto
    }))]}),
})