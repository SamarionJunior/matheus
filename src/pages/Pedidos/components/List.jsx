import React from 'react';

import Item from './Item';

import Warning from '../../../components/Warning';

const List = ({produtos}) => {

  return (

    <div className="contl contlPedidos">

      <div className="Lista ListaColumn">

        {produtos.length !== 0 ?
          produtos?.map(produto => (
            <Item produto={produto} key={produtos.id}/>
          )) : <Warning text={"Nenhum produto nos pedidos"}/>}

      </div>

    </div>

  );
}

export default List