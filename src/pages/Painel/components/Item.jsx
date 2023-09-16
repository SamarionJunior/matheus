import React from 'react';
import { useDispatch } from "react-redux";

import {ImageSmall} from '../../../components/Image';
import { updateOrderStatusById } from '../../../store/fetchActions';

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
          <button className='ItemPainel-Actions' onClick={_ => dispatch(updateOrderStatusById(produto.id, "Em Produção"))}>Pro</button>
          <button className='ItemPainel-Actions' onClick={_ => dispatch(updateOrderStatusById(produto.id, "Em Transito"))}>Tra</button>
          <button className='ItemPainel-Actions' onClick={_ => dispatch(updateOrderStatusById(produto.id, "Entregue"))}>Ent</button>
        </div>
      </div>
      
    </div>
  );
}

export default Item