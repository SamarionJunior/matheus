import './App.css';

import React, { useEffect } from 'react';

import { Routes, Route } from "react-router-dom";

import Produtos from './pages/Produtos';
import Carrinho from './pages/Carrinho';
import Pagamento from './pages/Pagamento';
import Pedidos from './pages/Pedidos';
import Estoque from './pages/Estoque';
import Painel from './pages/Painel';

import { useDispatch } from 'react-redux';

import { getProductsList } from './store/fetchActions/products.js';
import { getProductToShoppingCarById } from './store/fetchActions/shoppingcar.js';
import { getProducsToPaymentArea } from './store/fetchActions/paymentarea.js';
import { getProductsToOrders } from './store/fetchActions/order.js';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsList())
    dispatch(getProductToShoppingCarById())
    dispatch(getProducsToPaymentArea())
    dispatch(getProductsToOrders())
  }, [dispatch])

  return (
    <Routes basename="/matheus">
      <Route exact path="/matheus/Produtos" element={<Produtos />} />
      <Route exact path="/matheus/Carrinho" element={<Carrinho />} />
      <Route exact path="/matheus/Pagamento" element={<Pagamento />} />
      <Route exact path="/matheus/Pedidos" element={<Pedidos />} />
      <Route exact path="/matheus/Estoque" element={<Estoque />} />
      <Route exact path="/matheus/Painel" element={<Painel />} />
      <Route exact path="/matheus/" element={<Produtos />} />
      <Route exact path="*" element={<Produtos />} />
    </Routes>
  );
}

export default App;
