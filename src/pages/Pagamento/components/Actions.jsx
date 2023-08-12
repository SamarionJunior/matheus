import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as ListActions from "../../../store/actions/produtos"
import { selectors } from '../../../store/selectors/produtos';

const Actions = () => {

  const dispatch = useDispatch()

  const produtos = useSelector(selectors.getProdutos)

  const isEmProcessamento = produtos.filter(produto => produto.emProcessoDePagamento > 0)

  return (

      <div className="Actions ActionsPagamento">

        <div className="Buttons">

          {
            isEmProcessamento.length !== 0 ? (<>
              <button onClick={e => dispatch(ListActions.setPedidos(produtos))}>adicionar</button>
              <button onClick={e => dispatch(ListActions.getPagamento(produtos))}>cancelar</button>
            </>) : null
          }

        </div>

      </div>
      
  );
}

export default Actions
