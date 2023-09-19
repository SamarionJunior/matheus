import {createSlice } from '@reduxjs/toolkit'

import INITIAL_STATE from "../states/produtos"

import { addProducsToPaymentArea, addProductToShoppingCarById, addProductsToOrders, createProductInProductsList, deleteAllProductsFromShoppingCar, deleteProductById, deleteProductFromShoppingCarById, getProductsList, removeProductFromShoppingCarById, removeProductsFromPaymentArea, updateOrderStatusById, updateProductById } from '../fetchActions'

function insertNewProductsFromRequestToState(state, action) {
  // console.log(action.payload)
  const newProducts = action.payload.map(a => {a.id = a._id; return a})
  state.produtos = [...Object.assign([], newProducts)]
  
  console.log(state.produtos.filter(p => p.NosPedidos > 0)[0].status)
}

const produtos =  createSlice({
    name: 'produtos',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getProductsList.fulfilled, insertNewProductsFromRequestToState)
        // SHOPPING CAR
        .addCase(addProductToShoppingCarById.fulfilled, insertNewProductsFromRequestToState)
        .addCase(removeProductFromShoppingCarById.fulfilled, insertNewProductsFromRequestToState)
        .addCase(deleteProductFromShoppingCarById.fulfilled, insertNewProductsFromRequestToState)
        .addCase(deleteAllProductsFromShoppingCar.fulfilled, insertNewProductsFromRequestToState)
        // PAYMENT AREA
        .addCase(addProducsToPaymentArea.fulfilled, insertNewProductsFromRequestToState)
        .addCase(removeProductsFromPaymentArea.fulfilled, insertNewProductsFromRequestToState)
        // ORDERS
        .addCase(addProductsToOrders.fulfilled, insertNewProductsFromRequestToState)
        .addCase(updateOrderStatusById.fulfilled, insertNewProductsFromRequestToState)
        // PRODUCTS LIST
        .addCase(createProductInProductsList.fulfilled, insertNewProductsFromRequestToState)
        .addCase(updateProductById.fulfilled, insertNewProductsFromRequestToState)
        .addCase(deleteProductById.fulfilled, insertNewProductsFromRequestToState)
    },
})

export default produtos;

// export const { 
//     addProductToShoppingCarById, 
//     removeProductFromShoppingCarById, 
//     deleteProductFromShoppingCarById, 
//     deleteAllProductsFromShoppingCar, 
//     addProducsToPaymentArea, 
//     removeProductsFromPaymentArea, 
//     addProductsToOrders, 
//     updateOrderStatusById, 
//     createProductInProductsList, 
//     updateProductById, 
//     deleteProductById 
// } = produtos.actions;

// const produtos =  createSlice({
//     name: 'produtos',
//     initialState: INITIAL_STATE,
//     reducers: {
//         // SHOPPING CAR
//         addProductToShoppingCarById(state, action){
//             state.produtos = [...Object.assign([], state.produtos.map(produto => {
//                 if(produto.id === action.payload){
//                     if(produto.quantidade > 0){
//                         produto.quantidade -= 1
//                         produto.noCarrinho += 1
//                     }
//                 }
//                 return produto
//             }))]
//         }, 
//         removeProductFromShoppingCarById(state, action){
//             state.produtos = [...Object.assign([], state.produtos.map(produto => {
//                 if(produto.id === action.id){
//                     if(produto.noCarrinho > 0){
//                         produto.quantidade += 1
//                         produto.noCarrinho -= 1
//                     }
//                 }
//                 return produto
//             }))]
//         }, 
//         deleteProductFromShoppingCarById(state, action){
//             state.produtos = [...Object.assign([], state.produtos.map(produto => {
//                 if(produto.id === action.id){
//                     if(produto.noCarrinho > 0){
//                         produto.quantidade += produto.noCarrinho
//                         produto.noCarrinho = 0
//                     }
//                 }
//                 return produto
//             }))]
//         }, 
//         deleteAllProductsFromShoppingCar(state, action){
//             state.produtos = [...Object.assign([], state.produtos.map(produto => {
//                 if(produto.noCarrinho > 0){
//                     produto.quantidade += produto.noCarrinho
//                     produto.noCarrinho = 0
//                 }
//                 return produto
//             }))]
//         }, 
//         // PAYMENT AREA
//         addProducsToPaymentArea(state, action){
//             state.produtos = [...Object.assign([], state.produtos.map(produto => {
//                 produto.emProcessoDePagamento += produto.noCarrinho
//                 produto.noCarrinho = 0
//                 return produto
//             }))]
//         }, 
//         removeProductsFromPaymentArea(state, action){
//             state.produtos = [...Object.assign([], state.produtos.map(produto => {
//                 produto.noCarrinho = produto.emProcessoDePagamento
//                 produto.emProcessoDePagamento = 0
//                 return produto
//             }))]
//         }, 
//         // ORDERS
//         addProductsToOrders(state, action){
//             state.produtos = [...Object.assign([], state.produtos.map(produto => {
//                 produto.NosPedidos += produto.emProcessoDePagamento
//                 produto.emProcessoDePagamento = 0
//                 return produto
//             }))]
//         }, 
//         updateOrderStatusById(state, action){
//             state.produtos = [...Object.assign([], state.produtos.map(produto => {
//                 if(produto.id === action.id){
//                     produto.status = action.status
//                 }
//                 return produto
//             }))]
//         }, 
//         // PRODUCTS LIST
//         createProductInProductsList(state, action){
//             state.produtos = [...Object.assign([], state.produtos.push({
//                 nome: action.nome,
//                 id: Math.random(),
//                 preco: action.preco,
//                 quantidade: action.quantidade,
//                 noCarrinho: 0,
//                 emProcessoDePagamento: 0,
//                 NosPedidos: 0,
//                 status: "Em Produção"
//             }))]
//         }, 
//         updateProductById(state, action){
//             state.produtos = [...Object.assign([], state.produtos.map(produto => {
//                 if(produto.id === action.id){
//                     produto.nome = action.nome
//                     produto.preco = action.preco
//                     produto.quantidade = action.quantidade
//                 }
//                 return produto
//             }))]
//         }, 
//         deleteProductById(state, action){
//             state.produtos = [...Object.assign([], state.produtos.filter(produto => 
//                 produto.id !== action.id
//             ))]
//         },
//     },
//     extraReducers: (builder) => {
//       builder.addCase(getProductsList.fulfilled, (state, action) => {
//         const newProducts = action.payload.map(a => {a.id = a._id; return a})
//         state.produtos = [...Object.assign([], newProducts)]
//       }),
//       builder.addCase(getProductsList.fulfilled, (state, action) => {
//         const newProducts = action.payload.map(a => {a.id = a._id; return a})
//         state.produtos = [...Object.assign([], newProducts)]
//       }),
//       builder.addCase(getProductsList.fulfilled, (state, action) => {
//         const newProducts = action.payload.map(a => {a.id = a._id; return a})
//         state.produtos = [...Object.assign([], newProducts)]
//       }),
//       builder.addCase(getProductsList.fulfilled, (state, action) => {
//         const newProducts = action.payload.map(a => {a.id = a._id; return a})
//         state.produtos = [...Object.assign([], newProducts)]
//       }),
//       builder.addCase(getProductsList.fulfilled, (state, action) => {
//         const newProducts = action.payload.map(a => {a.id = a._id; return a})
//         state.produtos = [...Object.assign([], newProducts)]
//       }),
//       builder.addCase(getProductsList.fulfilled, (state, action) => {
//         const newProducts = action.payload.map(a => {a.id = a._id; return a})
//         state.produtos = [...Object.assign([], newProducts)]
//       }),
//       builder.addCase(getProductsList.fulfilled, (state, action) => {
//         const newProducts = action.payload.map(a => {a.id = a._id; return a})
//         state.produtos = [...Object.assign([], newProducts)]
//       }),
//       builder.addCase(getProductsList.fulfilled, (state, action) => {
//         const newProducts = action.payload.map(a => {a.id = a._id; return a})
//         state.produtos = [...Object.assign([], newProducts)]
//       }),
//       builder.addCase(getProductsList.fulfilled, (state, action) => {
//         const newProducts = action.payload.map(a => {a.id = a._id; return a})
//         state.produtos = [...Object.assign([], newProducts)]
//       }),
//       builder.addCase(getProductsList.fulfilled, (state, action) => {
//         const newProducts = action.payload.map(a => {a.id = a._id; return a})
//         state.produtos = [...Object.assign([], newProducts)]
//       }),
//     },
// })
