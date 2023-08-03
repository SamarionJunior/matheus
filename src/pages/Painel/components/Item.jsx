import React from 'react';
import { useDispatch } from "react-redux";

import * as ListActions from "../../../store/actions/produtos"

const Item = ({produto}) => {

  const dispatch = useDispatch()

  return (
    <div key={produto.id} className='ItemPainel'>
        <div className='ItemPainel-Imagem'/>
        <div className='ItemPainel-Nome'>{produto.nome}</div>
        <div className='ItemPainel-Quantidade'>{produto.NosPedidos}</div>
        <div className='ItemPainel-Status'>{produto.status}</div>
        <button className='ItemPainel-Actions' onClick={_ => dispatch(ListActions.setStatus(produto.id, "Em Produção"))}>Em Produção</button>
        <button className='ItemPainel-Actions' onClick={_ => dispatch(ListActions.setStatus(produto.id, "Em Transito"))}>Em Transito</button>
        <button className='ItemPainel-Actions' onClick={_ => dispatch(ListActions.setStatus(produto.id, "Entregue"))}>Entregue</button>
    </div>
  );
}

export default Item