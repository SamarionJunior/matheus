import React, { cloneElement } from 'react';

const Estoque = ({items, component}) => {

  return (
      
    <div className="contl contlEstoque">

      <div className='Lista'>

        {items.map(item => cloneElement(component, {item: item, key: item.id}))}

      </div>

    </div>

  );
}

export default (Estoque)