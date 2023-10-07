import React from 'react';

import {ImageSmall} from '../../../components/Image';

const Item = ({produto}) => {

  return (
    <div key={produto.id} className='Item ItemCollumn ItemCollumn'>
      <ImageSmall/>
      <div className="ItemBodyRow ItemBodyPedidos">
        <div className="ItemBodyRowTitle ItemBodyPedidosTitle">
          <div className='ItemTitle ItemTitlePedidos'>{produto.productId.nome}</div>
        </div>
        <div className="ItemBodyRowDescription ItemBodyPedidosDescription">
          <div className='ItemBodyText'>QTD: {produto.quantidade}</div>
        </div>
        <div className="ItemBodyRowDescription ItemBodyPedidosDescription">
          <div className='ItemBodyText'>{produto.groupId.status}</div>
        </div>
      </div>
    </div>
  );
}

export default Item