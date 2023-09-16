import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../services/api';

export const getProductsList = createAsyncThunk(
    'produtos/getProductsList',
    async () => {
      const response = await api.get('/produto/')
      return response.data.produtos
    }
)
// SHOPPING CAR
export const addProductToShoppingCarById = createAsyncThunk(
  'produtos/addProductToShoppingCarById',
  async (id) => {
    const response = await api.put('/produto/shoppingcar/add/' + id)
    return response.data.products
  }
)
export const removeProductFromShoppingCarById = createAsyncThunk(
  'produtos/removeProductFromShoppingCarById',
  async (id) => {
    const response = await api.put('/produto/shoppingcar/remove/' + id)
    return response.data.produtos
  }
)
export const deleteProductFromShoppingCarById = createAsyncThunk(
  'produtos/deleteProductFromShoppingCarById',
  async (id) => {
    const response = await api.put('/produto/shoppingcar/delete/' + id)
    return response.data.produtos
  }
)
export const deleteAllProductsFromShoppingCar = createAsyncThunk(
  'produtos/deleteAllProductsFromShoppingCar',
  async () => {
    const response = await api.put('/produto/shoppingcar/delete/all')
    return response.data.produtos
  }
)
// PAYMENT AREA
export const addProducsToPaymentArea = createAsyncThunk(
  'produtos/addProducsToPaymentArea',
  async () => {
    const response = await api.put('/produto/paymentarea/add/all')
    return response.data.produtos
  }
)
export const removeProductsFromPaymentArea = createAsyncThunk(
  'produtos/removeProductsFromPaymentArea',
  async () => {
    const response = await api.put('/produto/paymentarea/remove/all')
    return response.data.produtos
  }
)
// ORDERS
export const addProductsToOrders = createAsyncThunk(
  'produtos/addProductsToOrders',
  async (id) => {
    const response = await api.put('/produto/orders/add/all' + id)
    return response.data.produtos
  }
)
export const updateOrderStatusById = createAsyncThunk(
  'produtos/updateOrderStatusById',
  async (id, status) => {
    const response = await api.put('/produto/orders/status/' + id, status)
    return response.data.produtos
  }
)
// PRODUCTS LIST
export const createProductInProductsList = createAsyncThunk(
  'produtos/createProductInProductsList',
  async (product) => {
    const response = await api.put('/produto/', product)
    return response.data.produtos
  }
)
export const updateProductById = createAsyncThunk(
  'produtos/updateProductById',
  async (id) => {
    const response = await api.delete('/produto/' + id)
    return response.data.produtos
  }
)
export const deleteProductById = createAsyncThunk(
  'produtos/deleteProductById',
  async (id) => {
    const response = await api.delete('/produto/' + id)
    return response.data.produtos
  }
)