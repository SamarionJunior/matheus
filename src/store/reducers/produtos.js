// import { createReducer } from "@reduxjs/toolkit"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import INITIAL_STATE from "../states/produtos"

import api from "../../services/api"

// import {setState, setProdutos, setProdutosById, deleteProdutoById, setStatus, setCarrinho, getCarrinho, clearCarrinhoById, clearCarrinho, setPagamento, getPagamento, setPedidos} from "../actions/produtos"



const produtos =  createSlice({
    name: 'produtos',
    initialState: INITIAL_STATE,
    reducers: {
        setState(state, action){
            console.log(state.produtos)
            const newProducts = action.payload.map(a => {a.id = a._id; return a})
            state.produtos = [...Object.assign([], newProducts)]
        },
        setProdutos(state, action){
            state.produtos = [...Object.assign([], state.produtos.push({
                nome: action.nome,
                id: Math.random(),
                preco: action.preco,
                quantidade: action.quantidade,
                noCarrinho: 0,
                emProcessoDePagamento: 0,
                NosPedidos: 0,
                status: "Em Produção"
            }))]
        },
        setProdutosById(state, action){
            state.produtos = [...Object.assign([], state.produtos.map(produto => {
                if(produto.id === action.id){
                    produto.nome = action.nome
                    produto.preco = action.preco
                    produto.quantidade = action.quantidade
                }
                return produto
            }))]
        },
        deleteProdutoById(state, action){
            state.produtos = [...Object.assign([], state.produtos.filter(produto => 
                produto.id !== action.id
            ))]
        },
        setStatus(state, action){
            state.produtos = [...Object.assign([], state.produtos.map(produto => {
                if(produto.id === action.id){
                    produto.status = action.status
                }
                return produto
            }))]
        },
        setCarrinho(state, action){
            state.produtos = [...Object.assign([], state.produtos.map(produto => {
                if(produto.id === action.payload){
                    if(produto.quantidade > 0){
                        produto.quantidade -= 1
                        produto.noCarrinho += 1
                    }
                }
                return produto
            }))]
        },
        getCarrinho(state, action){
            state.produtos = [...Object.assign([], state.produtos.map(produto => {
                if(produto.id === action.id){
                    if(produto.noCarrinho > 0){
                        produto.quantidade += 1
                        produto.noCarrinho -= 1
                    }
                }
                return produto
            }))]
        },
        clearCarrinhoById(state, action){
            state.produtos = [...Object.assign([], state.produtos.map(produto => {
                if(produto.id === action.id){
                    if(produto.noCarrinho > 0){
                        produto.quantidade += produto.noCarrinho
                        produto.noCarrinho = 0
                    }
                }
                return produto
            }))]
        },
        clearCarrinho(state, action){
            state.produtos = [...Object.assign([], state.produtos.map(produto => {
                if(produto.noCarrinho > 0){
                    produto.quantidade += produto.noCarrinho
                    produto.noCarrinho = 0
                }
                return produto
            }))]
        },
        setPagamento(state, action){
            state.produtos = [...Object.assign([], state.produtos.map(produto => {
                produto.emProcessoDePagamento += produto.noCarrinho
                produto.noCarrinho = 0
                return produto
            }))]
        },
        getPagamento(state, action){
            state.produtos = [...Object.assign([], state.produtos.map(produto => {
                produto.noCarrinho = produto.emProcessoDePagamento
                produto.emProcessoDePagamento = 0
                return produto
            }))]
        },
        setPedidos(state, action){
            state.produtos = [...Object.assign([], state.produtos.map(produto => {
                produto.NosPedidos += produto.emProcessoDePagamento
                produto.emProcessoDePagamento = 0
                return produto
            }))]
        },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUserById.fulfilled, (state, action) => {
        const newProducts = action.payload.map(a => {a.id = a._id; return a})
        state.produtos = [...Object.assign([], newProducts)]
      })
    },
})

export const fetchUserById = createAsyncThunk(
    'produtos/fetchByIdStatus',
    async () => {
      const response = await api.get('/produto/')
      return response.data.produtos
    }
)

export const { 
    setState, setProdutos, setProdutosById, deleteProdutoById, setStatus, setCarrinho, getCarrinho, clearCarrinhoById, clearCarrinho, setPagamento, getPagamento, setPedidos 
} = produtos.actions;

export default produtos;

// export default createReducer(INITIAL_STATE, (builder) => {
//     builder
//         .addCase(setState, (state, action) => {
//             console.log(state.produtos)
//             const newProducts = action.payload.map(a => {a.id = a._id; return a})
//             return void({
//                 ...state, 
//                 produtos: [...Object.assign([], newProducts)]
//             })
//         })
//         .addCase(setProdutos, (state, action) => void({
//             ...state, 
//             produtos: [...Object.assign([], state.produtos.push({
//                 nome: action.nome,
//                 id: Math.random(),
//                 preco: action.preco,
//                 quantidade: action.quantidade,
//                 noCarrinho: 0,
//                 emProcessoDePagamento: 0,
//                 NosPedidos: 0,
//                 status: "Em Produção"
//             }))]
//         }))
//         .addCase(setProdutosById, (state, action) => void({
//             ...state,
//             produtos: [...Object.assign([], state.produtos.map(produto => {
//                 if(produto.id === action.id){
//                     produto.nome = action.nome
//                     produto.preco = action.preco
//                     produto.quantidade = action.quantidade
//                 }
//                 return produto
//             }))]
//         }))
//         .addCase(deleteProdutoById, (state, action) => void({
//             ...state, 
//             produtos: [...Object.assign([], state.produtos.filter(produto => 
//                 produto.id !== action.id
//             ))]
//         }))
//         .addCase(setStatus, (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
//             if(produto.id === action.id){
//                 produto.status = action.status
//             }
//             return produto
//         }))]}))
//         .addCase(setCarrinho, (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
//             if(produto.id === action.payload){
//                 if(produto.quantidade > 0){
//                     produto.quantidade -= 1
//                     produto.noCarrinho += 1
//                 }
//             }
//             return produto
//         }))]}))
//         .addCase(getCarrinho, (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
//             if(produto.id === action.id){
//                 if(produto.noCarrinho > 0){
//                     produto.quantidade += 1
//                     produto.noCarrinho -= 1
//                 }
//             }
//             return produto
//         }))]}))
//         .addCase(clearCarrinhoById, (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
//             if(produto.id === action.id){
//                 if(produto.noCarrinho > 0){
//                     produto.quantidade += produto.noCarrinho
//                     produto.noCarrinho = 0
//                 }
//             }
//             return produto
//         }))]}))
//         .addCase(clearCarrinho, (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
//             if(produto.noCarrinho > 0){
//                 produto.quantidade += produto.noCarrinho
//                 produto.noCarrinho = 0
//             }
//             return produto
//         }))]}))
//         .addCase(setPagamento, (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
//             produto.emProcessoDePagamento += produto.noCarrinho
//             produto.noCarrinho = 0
//             return produto
//         }))]}))
//         .addCase(getPagamento, (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
//             produto.noCarrinho = produto.emProcessoDePagamento
//             produto.emProcessoDePagamento = 0
//             return produto
//         }))]}))
//         .addCase(setPedidos, (state, action) => void({...state, produtos: [...Object.assign([], state.produtos.map(produto => {
//             produto.NosPedidos += produto.emProcessoDePagamento
//             produto.emProcessoDePagamento = 0
//             return produto
//         }))]}))
// })