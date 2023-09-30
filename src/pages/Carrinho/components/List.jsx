import React from 'react';
import { useSelector } from "react-redux";

import { selectors } from '../../../store/selectors/produtos';

import Warning from '../../../components/Warning';

import Item from './Item';

const List = () => {

  const produtos = useSelector(selectors.getProdutos)

  const isNoCarrinho = produtos.filter(produto => produto.noCarrinho > 0);

  return (
      <div className="contl contlCarrinho">

        <div className="Lista ListaColumn">

          {
            isNoCarrinho.length !== 0 ? 
              isNoCarrinho?.map(produto => (
                <Item produto={produto}/>
              )) :(
                <Warning text={"Carrinho vazio!"}/>
              )
          }

        </div>

      </div>
  );
}

export default List
