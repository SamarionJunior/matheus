import {createSlice } from '@reduxjs/toolkit'

import INITIAL_STATE from "../states/produtos"

import {
  getProductsToOrders, 
  addProductsToOrders, 
  updateOrderStatusById, 
} from '../fetchActions/order.js'

function insertNewProductsFromRequestToState(state, action) {
  const newProducts = action?.payload?.map(a => {a.id = a._id; delete a._id; return a})
  // state = [...Object.assign([], newProducts)]
  // console.log(state)
  return [...Object.assign([], newProducts)]
}

const produtos =  createSlice({
    name: 'order',
    initialState: [],
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