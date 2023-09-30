import React from 'react';
import { useSelector } from "react-redux";

import { selectors } from '../../../store/selectors/produtos';

import Item from './Item';
import SelectPay from './SelectPay';

import Warning from '../../../components/Warning';

const List = () => {

  const produtos = useSelector(selectors.getProdutos)

  const isEmProcessamento = produtos.filter(produto => produto.emProcessoDePagamento > 0)

  return (

    <div className="contl contlPagamento">

        <div className="Lista ListaColumn">
          
          <SelectPay/>
          {isEmProcessamento.length !== 0 ? 
            isEmProcessamento?.map(produto => (
                <Item produto={produto}/>
              )) : <Warning text={"Nenhum produto para pagamento"} newValue="20rem"/>
          }
        
        </div>
    
    </div>

  );
}

export default List
