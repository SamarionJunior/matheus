import React, { cloneElement } from 'react';

import Warning from '../../../components/Warning';

const Estoque = ({items, component}) => {

  return (
      
    <div className="contl contlEstoque">

      <div className='Lista ListaColumn'>

        {items.length !== 0 ?
          items.map(item => 
            cloneElement(component, {item: item, key: item.id})
          ) : <Warning text={"Nenhum produto no estoque"} newValue="20rem"/>}

      </div>

    </div>

  );
}

export default (Estoque)