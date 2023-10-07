import '../style.css'

import React from 'react';
import { useDispatch } from "react-redux";

// import { selectors } from '../../../store/selectors/produtos';

import {ImageSmall} from '../../../components/Image';
import { addProductToShoppingCarById } from '../../../store/fetchActions/shoppingcar.js';
import { getProductsList } from '../../../store/fetchActions/products';

const Item = ({produto}) => {

  // const produtos = useSelector(selectors.getProdutos)

  const dispatch = useDispatch()

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
            {/* <button className="ButtonCarrinho" onClick={e => dispatch(addProductToShoppingCarById(produto.id))}>Mais</button> */}
            <button className="ButtonCarrinho" onClick={e => console.log(produto)}>Mais</button>
            {produto.quantidade <= 0 ?
              <div className="ItemBodyWarning">(Produto esgotado)</div> : 
              <button className="ButtonCarrinho" onClick={e => {
                dispatch(addProductToShoppingCarById(produto.id))
                  .unwrap()
                  .then(res => dispatch(getProductsList()))
              }}>Add</button>
            }
          </div>
        </div>
      </div>
    </div>

  );
}

export default Item