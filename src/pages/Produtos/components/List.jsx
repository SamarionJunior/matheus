// import '../style.css'

import React from 'react';
import { useSelector } from "react-redux";

import { selectors } from '../../../store/selectors/produtos';

import Warning from '../../../components/Warning';

import Item from './Item';

const List = () => {

  const produtos = useSelector(selectors.getProdutos)

  return (
      <div className="contl contlProdutos">

        <div className="Lista ListaCell">
          
          {produtos.length !== 0 ? 
            produtos.map(produto => (
              <Item produto={produto}/>
            )) :(
            <Warning text={"Nenhum produto no estoque"}/>
          )}
          
        </div>

      </div>
  );
}

export default List