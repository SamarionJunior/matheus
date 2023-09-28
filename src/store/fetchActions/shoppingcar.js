import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../services/api';

export const getProductToShoppingCarById = createAsyncThunk(
  'shoppingcar/getProductToShoppingCarById',
  async (id) => {
    const response = await api.put('/shoppingcar/')
    return response.data.products
  }
)
export const createProductToShoppingCarById = createAsyncThunk(
  'shoppingcar/createProductToShoppingCarById',
  async (id) => {
    const response = await api.post('/shoppingcar/' + id)
    return response.data.products
  }
)
export const addProductToShoppingCarById = createAsyncThunk(
  'shoppingcar/addProductToShoppingCarById',
  async (id) => {
    const response = await api.put('/shoppingcar/add/' + id)
    return response.data.products
  }
)
export const removeProductFromShoppingCarById = createAsyncThunk(
  'shoppingcar/removeProductFromShoppingCarById',
  async (id) => {
    const response = await api.put('/shoppingcar/remove/' + id)
    return response.data.products
  }
)
export const deleteProductFromShoppingCarById = createAsyncThunk(
  'shoppingcar/deleteProductFromShoppingCarById',
  async (id) => {
    const response = await api.delete('/shoppingcar/' + id)
    return response.data.products
  }
)
export const deleteAllProductsFromShoppingCar = createAsyncThunk(
  'shoppingcar/deleteAllProductsFromShoppingCar',
  async () => {
    const response = await api.delete('/shoppingcar/')
    return response.data.products
  }
)