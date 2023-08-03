import Style from '../style.module.css'

import React from 'react';
import { useDispatch } from "react-redux";

import * as ListActions from "../../../store/actions/produtos"

const Item = ({produto}) => {

  const dispatch = useDispatch()

  return (
    <div key={produto.id} className={Style.Item}>
        <div className={Style.ItemImagem}/>
        <div className={Style.ItemBody}>
            <div className={Style.ItemBodyTitle}>
            {produto.nome}
            </div>
            <div className={Style.ItemBodyDescription}>
            {produto.descricao}
            </div>
            <div className={Style.ItemBodyFooter}>
            <div className={Style.ItemBodyPrice}>
                {produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
            </div>
            {produto.quantidade <= 0 ?
                <div className={Style.ItemBodyWarning}>(Produto esgotado)</div> : 
                <button className={Style.ItemBodyAction} onClick={e => dispatch(ListActions.setCarrinho(produto.id))}>adicionar</button>}
            </div>
        </div>
    </div>
  );
}

export default Item