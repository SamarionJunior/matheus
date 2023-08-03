import React from 'react';
import { useDispatch } from "react-redux";

import * as ListActions from "../../../store/actions/produtos"

const Item = ({produto}) => {

  const dispatch = useDispatch()

  return (
    <div className='ItemCarrinho' key={produto.id}>
        <div className='ItemCarrinho-Imagem'/>
        <div className='ItemCarrinho-Title'>{produto.nome}</div>
        <button className='ItemCarrinho-Actions' onClick={e => dispatch(ListActions.setCarrinho(produto.id))}>+</button>
        <div className='ItemCarrinho-Quantidade'>{produto.noCarrinho}</div>
        <button className='ItemCarrinho-Actions' onClick={e => dispatch(ListActions.getCarrinho(produto.id))}>-</button>
    </div>
  );
}

export default Item
