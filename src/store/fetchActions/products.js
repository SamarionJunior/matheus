import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../services/api';

export const getProductsList = createAsyncThunk(
    'products/getProductsList',
    async () => {
      const response = await api.get('/product/')
      return response.data.products
    }
)
// export const getProductsListById = createAsyncThunk(
//     'products/getProductsListById',
//     async (id) => {
//       const response = await api.get('/product/' + id)
//       return response.data.products
//     }
// )
export const createProductInProductsList = createAsyncThunk(
  'products/createProductInProductsList',
  async (product) => {
    const response = await api.post('/product/', product)
    return response.data.products
  }
)
export const updateProductById = createAsyncThunk(
  'products/updateProductById',
  async (payload) => {
    const response = await api.put('/product/' + payload.id, payload)
    return response.data.products
  }
)
export const deleteProductById = createAsyncThunk(
  'products/deleteProductById',
  async (id) => {
    const response = await api.delete('/product/' + id)
    return response.data.products
  }
)