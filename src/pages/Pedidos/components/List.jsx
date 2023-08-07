import React from 'react';
import { useSelector} from "react-redux";

import { selectors } from '../../../store/selectors/produtos';

import Item from './Item';

const List = () => {

  const produtos = useSelector(selectors.getProdutos)

  const isNosPedidos = produtos.filter(produto => produto.NosPedidos > 0)

  return (

    <div className="contl">

      <div className="Lista ListaColumn">

        {isNosPedidos.length !== 0 ?
          isNosPedidos.map(produto => (
            <Item produto={produto}/>
          )) : null}

      </div>

    </div>

  );
}

export default List