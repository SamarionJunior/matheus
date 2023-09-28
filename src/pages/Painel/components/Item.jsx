import React from 'react';
import { useDispatch } from "react-redux";

import {ImageSmall} from '../../../components/Image';
import { updateOrderStatusById } from '../../../store/fetchActions/order.js';

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
          <button className={`ItemPainel-Actions ${produto.status === "Em Produção" ? null : null}`} onClick={_ => dispatch(updateOrderStatusById({id: produto.id, status: "Em Produção"}))}>Pro</button>
          <button className={`ItemPainel-Actions ${produto.status === "Em Transito" ? null : null}`} onClick={_ => dispatch(updateOrderStatusById({id: produto.id, status: "Em Transito"}))}>Tra</button>
          <button className={`ItemPainel-Actions ${produto.status === "Entregue" ? null : null}`} onClick={_ => dispatch(updateOrderStatusById({id: produto.id, status: "Entregue"}))}>Ent</button>
        </div>
      </div>
      
    </div>
  );
}

export default Item