import '../style.css'

import React from 'react';
import { useDispatch } from "react-redux";

import {ImageSmall, ImageMedium} from '../../../components/Image';
import { addProductToShoppingCarById } from '../../../store/fetchActions/shoppingcar.js';
import { getProductsList } from '../../../store/fetchActions/products';

const View = ({produto, setIsView, isView}) => {

  const dispatch = useDispatch()

  return (
    <div className="View">
        <div className="Item ItemCollumn">
            <ImageMedium/>
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
                        <button className="ButtonCarrinho" onClick={e => setIsView(!isView)}>
                        <i class="fa-solid fa-eye"/>
                        {/* <img src={shoppingCarPNG} alt=""/> */}
                        </button>
                        {produto.quantidade <= 0 ?
                        <div className="ItemBodyWarning">(Produto esgotado)</div> : 
                        <button className="ButtonCarrinho" onClick={e => {
                            dispatch(addProductToShoppingCarById(produto.id))
                            .unwrap()
                            .then(res => dispatch(getProductsList()))
                        }}>
                            <i class="fa-solid fa-plus"/>
                        </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default View