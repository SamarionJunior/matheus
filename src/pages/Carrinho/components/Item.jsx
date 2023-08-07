import React from 'react';
import { useDispatch } from "react-redux";

import * as ListActions from "../../../store/actions/produtos"

import {ImageSmall} from '../../../components/Image';

const Item = ({produto}) => {

  const dispatch = useDispatch()

  return (
    <div className='Item ItemCollumn' key={produto.id}>
        <ImageSmall/>
        <div className="ItemBodyRow ItemBodyCarrinho">
          <div className="ItemBodyRowTitle ItemBodyCarrinhoTitle">
            <div className='ItemTitle ItemTitleCarrinho'>{produto.nome}</div>
          </div>
          <div className="ItemBodyRowDescription ItemBodyCarrinhoDescription">
            <div className='ItemCarrinho-Quantidade'>{produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
          </div>
          <div className='ItemBodyRowActions ItemBodyCarrinhoActions'>
            <button className='ItemCarrinho-Actions' onClick={e => dispatch(ListActions.setCarrinho(produto.id))}>+</button>
            <div className='ItemCarrinho-Quantidade'>{produto.noCarrinho}</div>
            <button className='ItemCarrinho-Actions' onClick={e => dispatch(ListActions.getCarrinho(produto.id))}>-</button>
          </div>
        </div>
    </div>
  );
}

export default Item
