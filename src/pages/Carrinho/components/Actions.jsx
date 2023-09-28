import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { selectors } from '../../../store/selectors/produtos';
import { addProducsToPaymentArea } from '../../../store/fetchActions/paymentarea.js';
import { deleteAllProductsFromShoppingCar } from '../../../store/fetchActions/shoppingcar.js';

const Actions = () => {

  const dispatch = useDispatch()

  const produtos = useSelector(selectors.getProdutos)

  const isNoCarrinho = produtos.filter(produto => produto.noCarrinho > 0);

  return (

      <div className="Actions ActionsCarrinho">

        <div className="Buttons">

          {
            isNoCarrinho.length !== 0 ? (<>
              <button onClick={e => dispatch(deleteAllProductsFromShoppingCar(produtos))}>limpar</button>
              <button onClick={e => dispatch(addProducsToPaymentArea(produtos))}>comprar</button>
            </>) : null
          }
          
        </div>
        
      </div>
  );
}

export default Actions
