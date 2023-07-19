import React from 'react';

import { useSelector } from "react-redux";
import { selectors } from '../../store/selectors/produtos';

import Item from './Item';

const Estoque = ({}) => {

  const produtos = useSelector(selectors.getProdutos)

  return (
    <div>
        {produtos.map(produto => <Item key={produto.id} produto={produto}/>)}
    </div>
  );
}

export default (Estoque)