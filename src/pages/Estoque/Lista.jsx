import React, { cloneElement } from 'react';

const Estoque = ({items, component}) => {

  return (
    <div>
        {items.map(item => cloneElement(component, {item: item, key: item.id}))}
    </div>
  );
}

export default (Estoque)