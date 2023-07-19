import React from 'react';

import { Link } from "react-router-dom";

const Links = () => {

  return (
    <div>
        <Link to="/Produtos">Produtos</Link>
        <Link to="/Carrinho">Carrinho</Link>
        <Link to="/Pagamento">Pagamento</Link>
        <Link to="/Pedidos">Pedidos</Link>
        <Link to="/Estoque">Estoque</Link>
        <Link to="/Painel">Painel</Link>
    </div>
  );
}

export default (Links)