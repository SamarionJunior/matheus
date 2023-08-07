import React from 'react';
import { useDispatch } from "react-redux";

import * as ListActions from "../../../store/actions/produtos"

import {ImageSmall} from '../../../components/Image';

const Item = ({produto}) => {

  const dispatch = useDispatch()

  return (
    <div key={produto.id} className='Item ItemCollumn'>
      <ImageSmall/>

      <div className="ItemBodyRow ItemBodyPainel">
        <div className="ItemBodyRowTitle ItemBodyPainelTitle">
          <div className='ItemTitle ItemTitlePainel'>{produto.nome}</div>
        </div>
        <div className="ItemBodyRowDescription ItemBodyPainelDescription">
          <div className='ItemBodyText'>{produto.NosPedidos}</div>
        </div>
        <div className="ItemBodyRowDescription ItemBodyPainelDescription">
          <div className='ItemBodyText'>{produto.status}</div>
        </div>
          <div className='ItemBodyRowActions ItemBodyPainelActions'>
            <button className='ItemPainel-Actions' onClick={_ => dispatch(ListActions.setStatus(produto.id, "Em Produção"))}>Em Produção</button>
            <button className='ItemPainel-Actions' onClick={_ => dispatch(ListActions.setStatus(produto.id, "Em Transito"))}>Em Transito</button>
            <button className='ItemPainel-Actions' onClick={_ => dispatch(ListActions.setStatus(produto.id, "Entregue"))}>Entregue</button>
          </div>
      </div>
      
    </div>
  );
}

export default Item