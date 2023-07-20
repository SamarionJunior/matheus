import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as ListActions from "../../store/actions/produtos"
import { selectors } from '../../store/selectors/produtos';

import Links from '../../components/Links';

const Pagamento = () => {

  const dispatch = useDispatch()

  const produtos = useSelector(selectors.getProdutos)

  const isEmProcessamento = produtos.filter(produto => produto.emProcessoDePagamento > 0)

  return (
    <div>
      <Links></Links>
      <h1>Pagamento</h1>
      <div>

        {
          isEmProcessamento.length !== 0 ? 
          isEmProcessamento.map(produto => (
              <div key={produto.id}>
                <div>{produto.nome}</div>
                <div>{produto.emProcessoDePagamento}</div>
                <div>{produto.emProcessoDePagamento * produto.preco}</div>
              </div>
            )) : null
        }

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

export default Pagamento
