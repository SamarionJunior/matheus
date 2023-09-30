import {createSlice } from '@reduxjs/toolkit'

import INITIAL_STATE from "../states/produtos"

import {
  createProductInProductsList, 
  deleteProductById, 
  getProductsList, 
  updateProductById
} from '../fetchActions/products.js'

function insertNewProductsFromRequestToState(state, action) {
  const newProducts = action?.payload?.map(a => {a.id = a._id; delete a._id; return a})
  // state = [...Object.assign([], newProducts)]
  // console.log(state)
  return [...Object.assign([], newProducts)]
}

const produtos =  createSlice({
    name: 'products',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder
      // PRODUCTS LIST
        .addCase(getProductsList.fulfilled, insertNewProductsFromRequestToState)
        .addCase(createProductInProductsList.fulfilled, insertNewProductsFromRequestToState)
        .addCase(updateProductById.fulfilled, insertNewProductsFromRequestToState)
        .addCase(deleteProductById.fulfilled, insertNewProductsFromRequestToState)
    },
})

export default produtos;