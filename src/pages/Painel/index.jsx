import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as ListActions from "../../store/actions/produtos"
import { selectors } from '../../store/selectors/produtos';

import Links from '../../components/Links';

const Estoque = () => {

  const dispatch = useDispatch()

  const produtos = useSelector(selectors.getProdutos)

  const newProdutos = produtos.filter(produto => produto.NosPedidos > 0)

  return (
    <div>
        <Links></Links>
        <h1>Estoque</h1>
        <div>

          {newProdutos.length !== 0 ? produtos.map(produto => (
            <div key={produto.id}>
              <div>{produto.nome}</div>
              <div>{produto.NosPedidos}</div>
              <div>{produto.status}</div>
              <button onClick={_ => dispatch(ListActions.setStatus(produto.id, "Em Produção"))}>Em Produção</button>
              <button onClick={_ => dispatch(ListActions.setStatus(produto.id, "Em Transito"))}>Em Transito</button>
              <button onClick={_ => dispatch(ListActions.setStatus(produto.id, "Entregue"))}>Entregue</button>
            </div>
            )) : (
              <div>Nenhum produto no estoque</div>
            )
          }

        </div>
    </div>
  );
}

export default Estoque