import '../style.css'

import React from 'react';
import { useDispatch } from "react-redux";

import * as ListActions from "../../../store/actions/produtos"

import {ImageMedium} from '../../../components/Image';

const Item = ({produto}) => {

  const dispatch = useDispatch()

  return (
    <div key="id" className="Item ItemCell">
        <ImageMedium/>
        <div className="ItemBody">
            <div className="ItemTitle ItemTitleProdutos">
              {produto.nome}
            </div>
            <div className="ItemBodyDescription">
              {produto.descricao}
            </div>
            <div className="ItemBodyFooter">
              <div className="ItemBodyPrice">
                {produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
              </div>
              {produto.quantidade <= 0 ?
                <div className="ItemBodyWarning">(Produto esgotado)</div> : 
                <button className="ItemBodyAction" onClick={e => dispatch(ListActions.setCarrinho(produto.id))}>adicionar</button>
              }
            </div>
        </div>
    </div>
  );
}

export default Item