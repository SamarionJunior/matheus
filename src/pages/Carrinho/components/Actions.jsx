import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as ListActions from "../../../store/actions/produtos"
import { selectors } from '../../../store/selectors/produtos';

const Actions = () => {

  const dispatch = useDispatch()

  const produtos = useSelector(selectors.getProdutos)

  const isNoCarrinho = produtos.filter(produto => produto.noCarrinho > 0);

  return (

      <div className="Actions">

        <div className="Buttons">

          {
            isNoCarrinho.length !== 0 ? (<>
              <button onClick={e => dispatch(ListActions.clearCarrinho(produtos))}>Limpar Carrinho</button>
              <button onClick={e => dispatch(ListActions.setPagamento(produtos))}>adicionar</button>
            </>) : null
          }
          
        </div>
        
      </div>
  );
}

export default Actions
