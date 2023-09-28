import {createSlice } from '@reduxjs/toolkit'

import INITIAL_STATE from "../states/produtos"

import {
  getProductsToOrders, 
  addProductsToOrders, 
  updateOrderStatusById, 
} from '../fetchActions/paymentarea.js'

function insertNewProductsFromRequestToState(state, action) {
  const newProducts = action.payload.map(a => {a.id = a._id; delete a._id; return a})
  state.produtos = [...Object.assign([], newProducts)]
  console.log(state.produtos)
}

const produtos =  createSlice({
    name: 'order',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // ORDERS
        .addCase(getProductsToOrders.fulfilled, insertNewProductsFromRequestToState)
        .addCase(addProductsToOrders.fulfilled, insertNewProductsFromRequestToState)
        .addCase(updateOrderStatusById.fulfilled, insertNewProductsFromRequestToState)
    },
})

export default produtos;