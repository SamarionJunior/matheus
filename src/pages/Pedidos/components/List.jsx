import React from 'react';
import { useSelector} from "react-redux";

import { selectors } from '../../../store/selectors/produtos';

import Item from './Item';

import Warning from '../../../components/Warning';

const List = () => {

  const produtos = useSelector(selectors.getProdutos)

  const isNosPedidos = produtos.filter(produto => produto.NosPedidos > 0)

  return (

    <div className="contl contlPedidos">

      <div className="Lista ListaColumn">

        {isNosPedidos.length !== 0 ?
          isNosPedidos?.map(produto => (
            <Item produto={produto}/>
          )) : <Warning text={"Nenhum produto nos pedidos"}/>}

      </div>

    </div>

  );
}

export default List