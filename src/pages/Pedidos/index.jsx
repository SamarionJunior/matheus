import React from 'react';
import { useSelector} from "react-redux";

import { selectors } from '../../store/selectors/produtos';

import Links from '../../components/Links';

const Pedidos = () => {

  const produtos = useSelector(selectors.getProdutos)

  const isNosPedidos = produtos.filter(produto => produto.NosPedidos > 0)

  return (
    <div>
      <Links></Links>
      <h1>Pedidos</h1>
      <div>

        {
          isNosPedidos.length !== 0 ?
            isNosPedidos.map(produto => (
              <div key={produto.id}>
                <div>{produto.nome}</div>
                <div>{produto.NosPedidos}</div>
                <div>{produto.status}</div>
              </div>
            )) : null
        }

      </div>
    </div>
  );
}

export default Pedidos