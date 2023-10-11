import './Links.css';

import React from 'react';

import { Link } from "react-router-dom";

// import productPNG     from "../assets/image/link/product.jpg";
// import shoppingCarPNG from "../assets/image/link/shoppingCar.png";
// import paymentAreaPNG from "../assets/image/link/paymentArea.png";
// import ordersPNG      from "../assets/image/link/orders.png";
// import panelPNG       from "../assets/image/link/panel.png";
// import stockPNG       from "../assets/image/link/stock.png";

const Links = () => {

  return (
    <div className="Header">
      <div className='Links'>
          <Link className='Link' to="/matheus/Produtos">
            <i className="fa-solid fa-house LinkIcon"></i>
            {/* <img src={productPNG} className="ImagemLink" alt=''/> */}
          </Link>
          <Link className='Link' to="/matheus/Carrinho">
            <i className="fa-solid fa-cart-shopping LinkIcon"></i>
            {/* <img src={shoppingCarPNG} className="ImagemLink" alt=''/> */}
          </Link>
          <Link className='Link' to="/matheus/Pagamento">
            <i className="fa-solid fa-credit-card LinkIcon"></i>
            {/* <img src={paymentAreaPNG} className="ImagemLink" alt=''/> */}
          </Link>
          <Link className='Link' to="/matheus/Pedidos">
            <i className="fa-solid fa-bag-shopping LinkIcon"></i>
            {/* <img src={ordersPNG} className="ImagemLink" alt=''/> */}
          </Link>
          <Link className='Link' to="/matheus/Estoque">
            <i className="fa-solid fa-gear LinkIcon"></i>
            {/* <img src={panelPNG} className="ImagemLink" alt=''/> */}
          </Link>
          <Link className='Link' to="/matheus/Painel">
            <i className="fa-solid fa-box LinkIcon"></i>
            {/* <img src={stockPNG} className="ImagemLink" alt=''/> */}
          </Link>
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