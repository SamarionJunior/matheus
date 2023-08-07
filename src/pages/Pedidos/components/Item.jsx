import React from 'react';

import {ImageSmall} from '../../../components/Image';

const Item = ({produto}) => {

  return (
    <div key={produto.id} className='Item ItemCollumn'>
      <ImageSmall/>
      <div className="ItemBodyRow ItemBodyPedidos">
        <div className="ItemBodyRowTitle ItemBodyPedidosTitle">
          <div className='ItemTitle ItemTitlePedidos'>{produto.nome}</div>
        </div>
        <div className="ItemBodyRowDescription ItemBodyPedidosDescription">
          <div className='ItemBodyText'>{produto.NosPedidos}</div>
        </div>
        <div className="ItemBodyRowDescription ItemBodyPedidosDescription">
          <div className='ItemBodyText'>{produto.status}</div>
        </div>
      </div>
    </div>
  );
}

export default Item