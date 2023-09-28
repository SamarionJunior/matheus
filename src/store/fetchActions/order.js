import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../services/api';


export const getProductsToOrders = createAsyncThunk(
  'orders/getProductsToOrders',
  async () => {
    const response = await api.get('/order/')
    return response.data.products
  }
)
export const addProductsToOrders = createAsyncThunk(
  'orders/addProductsToOrders',
  async () => {
    const response = await api.post('/order/')
    return response.data.products
  }
)
export const updateOrderStatusById = createAsyncThunk(
  'orders/updateOrderStatusById',
  async (payload) => {
    const response = await api.put('/order/status/' + payload.id, payload)
    return response.data.products
  }
)