// import '../style.css'

import React from 'react';

import Warning from '../../../components/Warning';

import Item from './Item';

const List = ({produtos}) => {

  return (
      <div className="contl contlProdutos">

        <div className="Lista ListaColumn">

          {

              produtos !== undefined && produtos.length !== 0 ? 
                produtos?.map(produto => (
                    <Item produto={produto} key={produto.id}/>
                )) : (
                <Warning text={"Nenhum produto no estoque"}/>
              )
          
          }
          
        </div>

      </div>
  );
}

export default List