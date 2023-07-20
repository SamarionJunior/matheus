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
    <Routes>
      <Route exact path="/Produtos" element={<Produtos />} />
      <Route exact path="/Carrinho" element={<Carrinho />} />
      <Route exact path="/Pagamento" element={<Pagamento />} />
      <Route exact path="/Pedidos" element={<Pedidos />} />
      <Route exact path="/Estoque" element={<Estoque />} />
      <Route exact path="/Painel" element={<Painel />} />
      <Route exact path="/" element={<Produtos />} />
      <Route exact path="*" element={<Produtos />} />
    </Routes>
  );
}

export default App;
