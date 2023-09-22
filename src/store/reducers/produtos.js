import {createSlice } from '@reduxjs/toolkit'

import INITIAL_STATE from "../states/produtos"

import {
  addProducsToPaymentArea, 
  addProductToShoppingCarById, 
  addProductsToOrders, 
  createProductInProductsList, 
  deleteAllProductsFromShoppingCar, 
  deleteProductById, 
  deleteProductFromShoppingCarById, 
  getProductsList, 
  removeProductFromShoppingCarById, 
  removeProductsFromPaymentArea, 
  updateOrderStatusById, 
  updateProductById
} from '../fetchActions'

function insertNewProductsFromRequestToState(state, action) {
  const newProducts = action.payload.map(a => {a.id = a._id; return a})
  state.produtos = [...Object.assign([], newProducts)]
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