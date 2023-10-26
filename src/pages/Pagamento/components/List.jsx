import React from 'react';

import Item from './Item';
import SelectPay from './SelectPay';

import Warning from '../../../components/Warning';

const List = ({produtos}) => {

  return (

    <div className="contl contlPagamento">

        <div className="Lista ListaColumn">
          {produtos?.length !== 0 ? 
            produtos?.map(produto => (<>
                <SelectPay/>
                <Item produto={produto} key={produto.id}/>
              </>
            )) : <Warning text={"Nenhum produto para pagamento"} newValue="20rem"/>
          }
        
        </div>
    
    </div>

  );
}

export default List
