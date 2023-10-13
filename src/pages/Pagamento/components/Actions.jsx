import React from 'react';
import { useDispatch } from "react-redux";
import { addProductsToOrders, getProductsToOrders } from '../../../store/fetchActions/order.js';
import { removeProductsFromPaymentArea } from '../../../store/fetchActions/paymentarea.js';
import { getProductToShoppingCar } from '../../../store/fetchActions/shoppingcar.js';

const Actions = ({produtos}) => {

  const dispatch = useDispatch()

  return (

      <div className="Actions ActionsPagamento">

        <div className="Buttons">

          {
            produtos.length !== 0 ? (<>
              <button onClick={e => 
                dispatch(removeProductsFromPaymentArea(produtos))
                  .unwrap()
                  .then(res => dispatch(getProductToShoppingCar()))
              }>
                <i class="fa-solid fa-xmark"/>
              </button>
              <button onClick={e => 
                dispatch(addProductsToOrders(produtos))
                  .unwrap()
                  .then(res => dispatch(getProductsToOrders()))
              }>
                <i class="fa-solid fa-check"/>
              </button>
            </>) : null
          }

        </div>

      </div>
      
  );
}

export default Actions
