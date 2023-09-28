import {createSlice } from '@reduxjs/toolkit'

import INITIAL_STATE from "../states/produtos"

import {
  getProducsToPaymentArea, 
  addProducsToPaymentArea, 
  removeProductsFromPaymentArea, 
} from '../fetchActions/order.js'

function insertNewProductsFromRequestToState(state, action) {
  const newProducts = action.payload.map(a => {a.id = a._id; delete a._id; return a})
  state.produtos = [...Object.assign([], newProducts)]
  console.log(state.produtos)
}

const produtos =  createSlice({
    name: 'paymentarea',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // PAYMENT AREA
        .addCase(getProducsToPaymentArea.fulfilled, insertNewProductsFromRequestToState)
        .addCase(addProducsToPaymentArea.fulfilled, insertNewProductsFromRequestToState)
        .addCase(removeProductsFromPaymentArea.fulfilled, insertNewProductsFromRequestToState)
    },
})

export default produtos;