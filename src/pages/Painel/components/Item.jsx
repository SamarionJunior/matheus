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
          <button className='ItemPainel-Actions' onClick={_ => dispatch(ListActions.setStatus(produto.id, "Em Produção"))}>Pro</button>
          <button className='ItemPainel-Actions' onClick={_ => dispatch(ListActions.setStatus(produto.id, "Em Transito"))}>Tra</button>
          <button className='ItemPainel-Actions' onClick={_ => dispatch(ListActions.setStatus(produto.id, "Entregue"))}>Ent</button>
        </div>
      </div>
      
    </div>
  );
}

export default Item