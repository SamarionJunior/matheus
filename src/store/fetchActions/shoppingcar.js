import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../services/api';

export const getProductToShoppingCar = createAsyncThunk(
  'shoppingcar/getProductToShoppingCar',
  async (id) => {
    const response = await api.get('/shoppingcar/')
    return response.data.shoppingcars
  }
)
// export const createProductToShoppingCarById = createAsyncThunk(
//   'shoppingcar/createProductToShoppingCarById',
//   async (id) => {
//     const response = await api.post('/shoppingcar/' + id)
//     return response.data.shoppingcars
//   }
// )
export const addProductToShoppingCarById = createAsyncThunk(
  'shoppingcar/addProductToShoppingCarById',
  async (id) => {
    // console.log(id)
    const response = await api.put('/shoppingcar/add/' + id)
    // console.log(response.data.shoppingcars)
    return response.data.shoppingcars
  }
)
export const removeProductFromShoppingCarById = createAsyncThunk(
  'shoppingcar/removeProductFromShoppingCarById',
  async (id) => {
    // console.log(id)
    const response = await api.put('/shoppingcar/remove/' + id)
    // console.log(response.data.shoppingcars)
    return response.data.shoppingcars
  }
)
export const deleteProductFromShoppingCarById = createAsyncThunk(
  'shoppingcar/deleteProductFromShoppingCarById',
  async (id) => {
    const response = await api.delete('/shoppingcar/' + id)
    return response.data.shoppingcars
  }
)
export const deleteAllProductsFromShoppingCar = createAsyncThunk(
  'shoppingcar/deleteAllProductsFromShoppingCar',
  async () => {
    const response = await api.delete('/shoppingcar/')
    return response.data.shoppingcars
  }
)