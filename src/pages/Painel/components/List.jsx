import React from 'react';
import { useSelector } from "react-redux";

import { selectors } from '../../../store/selectors/produtos';

import Warning from '../../../components/Warning';

import Item from './Item';

const List = () => {

  const produtos = useSelector(selectors.getProdutos)

  const newProdutos = produtos.filter(produto => produto.NosPedidos > 0)

  return (

      <div className="contl contlPainel">

        <div className="Lista ListaColumn">

            {newProdutos.length !== 0 ? 
                produtos.map(produto => 
                  <Item produto={produto}/>
                ) : (
                <Warning text={"Nenhum produto no estoque"}/>
            )
          }

        </div>

      </div>
  );
}

export default List