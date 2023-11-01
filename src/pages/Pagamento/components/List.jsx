import React from 'react';

import Item from './Item';
import SelectPay from './SelectPay';

import Warning from '../../../components/Warning';

const List = ({produtos}) => {

  return (

    <div className="contl contlPagamento">
        {produtos?.length !== 0 ? 
          <SelectPay/> : null
        }

        <div className="Lista ListaColumn">
          {produtos?.length !== 0 ? 
            produtos?.map(produto => (
              <Item produto={produto} key={produto.id}/>
            )) : <Warning text={"Nenhum produto para pagamento"} newValue="10rem"/>
          }
        
        </div>
    
    </div>

  );
}

export default List
