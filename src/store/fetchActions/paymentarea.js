import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../services/api';


export const getProducsToPaymentArea = createAsyncThunk(
  'paymentarea/getProducsToPaymentArea',
  async () => {
    const response = await api.get('/paymentarea/')
    return response.data.paymentareas
  }
)
export const addProducsToPaymentArea = createAsyncThunk(
  'paymentarea/addProducsToPaymentArea',
  async () => {
    const response = await api.post('/paymentarea/')
    return response.data.paymentareas
  }
)
export const removeProductsFromPaymentArea = createAsyncThunk(
  'paymentarea/removeProductsFromPaymentArea',
  async () => {
    const response = await api.delete('/paymentarea/')
    return response.data.paymentareas
  }
)