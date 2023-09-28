import '../style.css'

import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { selectors } from '../../../store/selectors/produtos';

import {ImageSmall} from '../../../components/Image';
import { addProductToShoppingCarById } from '../../../store/fetchActions/shoppingcar.js';

const Item = ({produto}) => {

  const produtos = useSelector(selectors.getProdutos)

  const dispatch = useDispatch()
  
  function click(){
    console.log(produtos)
  }

  return (
    <div className="Item ItemCollumn">
      <ImageSmall/>
      <div className="ItemBodyRow ItemBodyRowProdutos">
        <div className="ItemBodyText">
          <div className="ItemTitle ItemTitleProdutos">
            {produto.nome}
          </div>
          <div className="ItemBodyDescription">
            {produto.descricao}
          </div>
          <div className="ItemBodyDescriptionPrice">
            {produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
          </div>
          <div className="ButtonsCarrinho">
            <button className="ButtonCarrinho" onClick={() => click()}>Mais</button>
            {produto.quantidade <= 0 ?
              <div className="ItemBodyWarning">(Produto esgotado)</div> : 
              <button className="ButtonCarrinho" onClick={e => dispatch(addProductToShoppingCarById(produto.id))}>Add</button>
            }
          </div>
        </div>
      </div>
    </div>

  );
}

export default Item