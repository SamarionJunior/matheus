import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as ListActions from "../../../store/actions/produtos"
import { selectors } from '../../../store/selectors/produtos';

const Actions = () => {

  const dispatch = useDispatch()

  const produtos = useSelector(selectors.getProdutos)

  const isNoCarrinho = produtos.filter(produto => produto.noCarrinho > 0);

  return (

      <div className="Actions ActionsCarrinho">

        <div className="Buttons">

          {
            isNoCarrinho.length !== 0 ? (<>
              <button onClick={e => dispatch(ListActions.clearCarrinho(produtos))}>limpar</button>
              <button onClick={e => dispatch(ListActions.setPagamento(produtos))}>comprar</button>
            </>) : null
          }
          
        </div>
        
      </div>
  );
}

export default Actions
