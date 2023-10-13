import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { selectors } from '../../../store/selectors/produtos';
import { addProducsToPaymentArea } from '../../../store/fetchActions/paymentarea.js';
import { deleteAllProductsFromShoppingCar, getProductToShoppingCar } from '../../../store/fetchActions/shoppingcar.js';
import { getProductsList } from '../../../store/fetchActions/products';

const Actions = () => {

  const dispatch = useDispatch()

  const produtos = useSelector(selectors.getProdutos)

  return (

      <div className="Actions ActionsCarrinho">

        <div className="Buttons">

          {
            produtos.length !== 0 ? (<>
              <button onClick={e => dispatch(
                deleteAllProductsFromShoppingCar())
                  .unwrap()
                  .then(res => dispatch(getProductsList()))
              }>
                <i class="fa-solid fa-broom"/>
              </button>
              <button onClick={e => dispatch(
                addProducsToPaymentArea())
                  .unwrap()
                  .then(res => dispatch(getProductToShoppingCar()))
              }>
                <i class="fa-solid fa-money-bill"/>
              </button>
            </>) : null
          }
          
        </div>
        
      </div>
  );
}

export default Actions
