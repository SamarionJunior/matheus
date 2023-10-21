import './Links.css';

import React from 'react';

import { Link } from "react-router-dom";

const Links = () => {

  return (
    <div className="Header">
      <div className='Links'>
          <Link className='Link' to="/matheus/Produtos">
            <i className="fa-solid fa-house LinkIcon"/>
          </Link>
          <Link className='Link' to="/matheus/Carrinho">
            <i className="fa-solid fa-cart-shopping LinkIcon"/>
          </Link>
          <Link className='Link' to="/matheus/Pagamento">
            <i className="fa-solid fa-credit-card LinkIcon"/>
          </Link>
          <Link className='Link' to="/matheus/Pedidos">
            <i className="fa-solid fa-bag-shopping LinkIcon"/>
          </Link>
          <Link className='Link' to="/matheus/Estoque">
            <i className="fa-solid fa-gear LinkIcon"/>
          </Link>
          <Link className='Link' to="/matheus/Painel">
            <i className="fa-solid fa-box LinkIcon"/>
          </Link>
      </div>
    </div>
  );
}

export default Links


// {/* <Link className='Link' to="/Produtos">Produtos</Link>
// <Link className='Link' to="/Carrinho">Carrinho</Link>
// <Link className='Link' to="/Pagamento">Pagamento</Link>
// <Link className='Link' to="/Pedidos">Pedidos</Link>
// <Link className='Link' to="/Estoque">Estoque</Link>
// <Link className='Link' to="/Painel">Painel</Link> */}