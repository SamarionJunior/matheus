import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../services/api';


export const getProductsToOrders = createAsyncThunk(
  'order/getProductsToOrders',
  async () => {
    const response = await api.get('/order/')
    return response.data.order
  }
)
export const addProductsToOrders = createAsyncThunk(
  'order/addProductsToOrders',
  async () => {
    const response = await api.post('/order/')
    return response.data.order
  }
)
export const updateOrderStatusById = createAsyncThunk(
  'order/updateOrderStatusById',
  async (payload) => {
    const response = await api.put('/order/status/', payload)
    return response.data.order
  }
)