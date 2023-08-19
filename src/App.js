import './App.css';

import React from 'react';

import { Routes, Route } from "react-router-dom";

import Produtos from './pages/Produtos';
import Carrinho from './pages/Carrinho';
import Pagamento from './pages/Pagamento';
import Pedidos from './pages/Pedidos';
import Estoque from './pages/Estoque';
import Painel from './pages/Painel';

function App() {
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
