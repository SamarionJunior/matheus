import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../services/api';

export const getProductsList = createAsyncThunk(
    'produtos/getProductsList',
    async () => {
      const response = await api.get('/produto/')
      return response.data.products
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
    return response.data.products
  }
)
export const deleteProductFromShoppingCarById = createAsyncThunk(
  'produtos/deleteProductFromShoppingCarById',
  async (id) => {
    const response = await api.put('/produto/shoppingcar/delete/' + id)
    return response.data.products
  }
)
export const deleteAllProductsFromShoppingCar = createAsyncThunk(
  'produtos/deleteAllProductsFromShoppingCar',
  async () => {
    const response = await api.put('/produto/shoppingcar/delete/all')
    return response.data.products
  }
)
// PAYMENT AREA
export const addProducsToPaymentArea = createAsyncThunk(
  'produtos/addProducsToPaymentArea',
  async () => {
    const response = await api.put('/produto/paymentarea/add/all')
    return response.data.products
  }
)
export const removeProductsFromPaymentArea = createAsyncThunk(
  'produtos/removeProductsFromPaymentArea',
  async () => {
    const response = await api.put('/produto/paymentarea/remove/all')
    return response.data.products
  }
)
// ORDERS
export const addProductsToOrders = createAsyncThunk(
  'produtos/addProductsToOrders',
  async () => {
    const response = await api.put('/produto/orders/add/all')
    return response.data.products
  }
)
export const updateOrderStatusById = createAsyncThunk(
  'produtos/updateOrderStatusById',
  async (payload) => {
    console.log(payload.status)
    const response = await api.put('/produto/orders/status/' + payload.id, payload)
    console.log(response.data.products.filter(p => p.id == payload._id)[0].status)
    return response.data.products
  }
)
// PRODUCTS LIST
export const createProductInProductsList = createAsyncThunk(
  'produtos/createProductInProductsList',
  async (product) => {
    const response = await api.post('/produto/', product)
    return response.data.products
  }
)
export const updateProductById = createAsyncThunk(
  'produtos/updateProductById',
  async (payload) => {
    const response = await api.put('/produto/' + payload.id, payload)
    return response.data.products
  }
)
export const deleteProductById = createAsyncThunk(
  'produtos/deleteProductById',
  async (id) => {
    const response = await api.delete('/produto/' + id)
    return response.data.products
  }
)