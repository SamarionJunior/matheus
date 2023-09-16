// import '../style.css'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { selectors } from '../../../store/selectors/produtos';

import Warning from '../../../components/Warning';

import Item from './Item';
import { getProductsList } from '../../../store/fetchActions';

const List = () => {
  const produtos = useSelector(selectors.getProdutos)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsList())
  }, [])

  return (
      <div className="contl contlProdutos">

        <div className="Lista ListaColumn">

          {

              produtos !== undefined && produtos.length !== 0 ? 
                produtos.map(produto => (
                    <Item produto={produto} key={produto.id}/>
                )) : (
                <Warning text={"Nenhum produto no estoque"}/>
              )
          
          }
          
        </div>

      </div>
  );
}

export default List