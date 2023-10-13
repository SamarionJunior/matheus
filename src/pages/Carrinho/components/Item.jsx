import React from 'react';
import { useDispatch } from "react-redux";

import {ImageSmall} from '../../../components/Image';
import { addProductToShoppingCarById, deleteProductFromShoppingCarById, removeProductFromShoppingCarById } from '../../../store/fetchActions/shoppingcar.js';
import { getProductsList } from '../../../store/fetchActions/products';

const Item = ({produto}) => {
  
  const dispatch = useDispatch()

  const productId = produto?.productId?._id

  return (
    <div className='Item ItemCollumn' key={produto?.id}>
        <ImageSmall/>
        <div className="ItemBodyRow ItemBodyCarrinho">
          <div className="ItemBodyRowTitle ItemBodyCarrinhoTitle">
            <div className='ItemTitle ItemTitleCarrinho'>{produto?.productId?.nome}</div>
          </div>
          <div className="ItemBodyRowDescription ItemBodyCarrinhoDescription">
            <div className='ItemCarrinhoText'>{produto?.productId?.preco?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
          </div>
          <div className="ItemBodyRowDescription ItemBodyCarrinhoDescription">
            <div className='ItemCarrinhoText'>QTD: {produto?.quantidade}</div>
          </div>
          <div className='ItemBodyRowActions ItemBodyCarrinhoActions'>
            <button className='ItemCarrinho-Actions' onClick={e => {
              // console.log(productId); 
              dispatch(addProductToShoppingCarById(productId))
                .unwrap()
                .then(res => dispatch(getProductsList()))
            }}>
              <i class="fa-solid fa-plus"/>
            </button>
            <button className='ItemCarrinho-Actions' onClick={e => {
              // console.log(productId); 
              dispatch(removeProductFromShoppingCarById(productId))
                .unwrap()
                .then(res => dispatch(getProductsList()))
            }}>
              <i class="fa-solid fa-minus"/>
            </button>
            <button className='ItemCarrinho-Actions' onClick={e => {
              // console.log(productId); 
              dispatch(deleteProductFromShoppingCarById(productId))
                .unwrap()
                .then(res => dispatch(getProductsList()))
            }}>
              <i class="fa-solid fa-trash"/>
            </button>
          </div>
        </div>
    </div>
  );
}

export default Item
