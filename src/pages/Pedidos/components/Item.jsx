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
          <div className='ItemBodyText'>
            {produto.groupId.status === "Em Produção" ? <i class="fa-solid fa-fire-burner"/> : null}
            {produto.groupId.status === "Em Transito" ? <i class="fa-solid fa-truck"/> : null}
            {produto.groupId.status === "Entregue" ? <i class="fa-solid fa-box"/> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item