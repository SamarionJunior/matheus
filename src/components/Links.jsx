import './Links.css';

import React from 'react';

import { Link } from "react-router-dom";

const Links = () => {

  return (
    <div className="Header">
      <div className='Links'>
          <Link className='Link' to="/Produtos">Produtos</Link>
          <Link className='Link' to="/Carrinho">Carrinho</Link>
          <Link className='Link' to="/Pagamento">Pagamento</Link>
          <Link className='Link' to="/Pedidos">Pedidos</Link>
          <Link className='Link' to="/Estoque">Estoque</Link>
          <Link className='Link' to="/Painel">Painel</Link>
      </div>
    </div>
  );
}

export default (Links)