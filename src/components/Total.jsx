import './Total.css';
import React from 'react';

const Total = ({produtos}) => {

  const total = produtos.reduce((acumulador, elemento) => acumulador + (elemento.productId.preco * elemento.quantidade), 0);

  return (
    <div className="Total">
        <div className="TotalContent">
            <div className="TotalText">Itens: <strong>{produtos.length}</strong></div>
            <div className="TotalText">Total: <strong>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></div>
        </div>
    </div>
  );
}

export default Total
