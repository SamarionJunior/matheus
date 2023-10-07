import './Links.css';

import React from 'react';

import { Link } from "react-router-dom";

import productPNG from "../assets/product.jpg";
import shoppingCarPNG from "../assets/shoppingCar.png";
import paymentAreaPNG from "../assets/paymentArea.png";
import ordersPNG from "../assets/orders.png";
import panelPNG from "../assets/panel.png";
import stockPNG from "../assets/stock.png";

const Links = () => {

  return (
    <div className="Header">
      <div className='Links'>
          <Link className='Link' to="/matheus/Produtos"><img src={productPNG} className="ImagemLink"/></Link>
          <Link className='Link' to="/matheus/Carrinho"><img src={shoppingCarPNG} className="ImagemLink"/></Link>
          <Link className='Link' to="/matheus/Pagamento"><img src={paymentAreaPNG} className="ImagemLink"/></Link>
          <Link className='Link' to="/matheus/Pedidos"><img src={ordersPNG} className="ImagemLink"/></Link>
          <Link className='Link' to="/matheus/Estoque"><img src={panelPNG} className="ImagemLink"/></Link>
          <Link className='Link' to="/matheus/Painel"><img src={stockPNG} className="ImagemLink"/></Link>
          {/* <Link className='Link' to="/Produtos">Produtos</Link>
          <Link className='Link' to="/Carrinho">Carrinho</Link>
          <Link className='Link' to="/Pagamento">Pagamento</Link>
          <Link className='Link' to="/Pedidos">Pedidos</Link>
          <Link className='Link' to="/Estoque">Estoque</Link>
          <Link className='Link' to="/Painel">Painel</Link> */}
      </div>
    </div>
  );
}

export default (Links)