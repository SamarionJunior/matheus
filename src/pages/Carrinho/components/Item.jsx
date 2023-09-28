import React from 'react';
import { useDispatch } from "react-redux";

import {ImageSmall} from '../../../components/Image';
import { addProductToShoppingCarById, deleteProductFromShoppingCarById, removeProductFromShoppingCarById } from '../../../store/fetchActions/shoppingcar.js';

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
            <div className='ItemCarrinhoText'>{produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
          </div>
          <div className="ItemBodyRowDescription ItemBodyCarrinhoDescription">
            <div className='ItemCarrinhoText'>QTD: {produto.noCarrinho}</div>
          </div>
          <div className='ItemBodyRowActions ItemBodyCarrinhoActions'>
            <button className='ItemCarrinho-Actions' onClick={e => dispatch(addProductToShoppingCarById(produto.id))}>add</button>
            <button className='ItemCarrinho-Actions' onClick={e => dispatch(removeProductFromShoppingCarById(produto.id))}>rm</button>
            <button className='ItemCarrinho-Actions' onClick={e => dispatch(deleteProductFromShoppingCarById(produto.id))}>exc</button>
          </div>
        </div>
    </div>
  );
}

export default Item
