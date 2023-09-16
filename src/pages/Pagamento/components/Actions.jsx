import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { selectors } from '../../../store/selectors/produtos';
import { addProductsToOrders, removeProductsFromPaymentArea } from '../../../store/fetchActions';

const Actions = () => {

  const dispatch = useDispatch()

  const produtos = useSelector(selectors.getProdutos)

  const isEmProcessamento = produtos.filter(produto => produto.emProcessoDePagamento > 0)

  return (

      <div className="Actions ActionsPagamento">

        <div className="Buttons">

          {
            isEmProcessamento.length !== 0 ? (<>
              <button onClick={e => dispatch(removeProductsFromPaymentArea(produtos))}>cancelar</button>
              <button onClick={e => dispatch(addProductsToOrders(produtos))}>Pagar</button>
            </>) : null
          }

        </div>

      </div>
      
  );
}

export default Actions
