import './App.css';

import React from 'react';

import { Routes, Route } from "react-router-dom";

// import { connect, shallowEqual } from "react-redux";
// import { bindActionCreators } from "redux";

// import * as PokemonActions from "./store/actions/pokemon"

import Produtos from './pages/Produtos/Produtos';
import Carrinho from './pages/Carrinho/Carrinho';
import Pagamento from './pages/Pagamento/Pagamento';
import Pedidos from './pages/Pedidos/Pedidos';
import Estoque from './pages/Estoque/Estoque';
import Painel from './pages/Painel/Painel';

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

// <div className="App">

// </div>
