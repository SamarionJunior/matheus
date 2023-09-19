import React from 'react';
import { useSelector } from "react-redux";

import { selectors } from '../../../store/selectors/produtos';

const Total = () => {

  const produtos = useSelector(selectors.getProdutos)

  const isNoCarrinho = produtos.filter(produto => produto.noCarrinho > 0);

  const quantidade = isNoCarrinho.length

  const total = isNoCarrinho.reduce((acumulador, elemento) => acumulador + (elemento.preco * elemento.noCarrinho), 0);

  // console.log(quantidade, total)

  return (
    <div className="Total">
        <div className="TotalContent">
            <div className="TotalText">Itens: <strong>{quantidade}</strong></div>
            <div className="TotalText">Total: <strong>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></div>
        </div>
    </div>
  );
}

export default Total
