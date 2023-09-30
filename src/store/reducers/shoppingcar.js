import {createSlice } from '@reduxjs/toolkit'

import INITIAL_STATE from "../states/produtos"

import {
  getProductToShoppingCarById, 
  addProductToShoppingCarById, 
  deleteAllProductsFromShoppingCar, 
  deleteProductFromShoppingCarById, 
  removeProductFromShoppingCarById, 
} from '../fetchActions/shoppingcar.js'

function insertNewProductsFromRequestToState(state, action) {
  const newProducts = action?.payload?.map(a => {a.id = a._id; delete a._id; return a})
  // state = [...Object.assign([], newProducts)]
  // console.log(state)
  return [...Object.assign([], newProducts)]
}

const produtos =  createSlice({
    name: 'shoppingcar',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder
        // SHOPPING CAR
        .addCase(getProductToShoppingCarById.fulfilled, insertNewProductsFromRequestToState)
        .addCase(addProductToShoppingCarById.fulfilled, insertNewProductsFromRequestToState)
        .addCase(removeProductFromShoppingCarById.fulfilled, insertNewProductsFromRequestToState)
        .addCase(deleteProductFromShoppingCarById.fulfilled, insertNewProductsFromRequestToState)
        .addCase(deleteAllProductsFromShoppingCar.fulfilled, insertNewProductsFromRequestToState)
    },
})

export default produtos;