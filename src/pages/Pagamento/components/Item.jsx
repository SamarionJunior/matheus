import React from 'react';

import {ImageSmall} from '../../../components/Image';

const Item = ({produto}) => {
  return (
    <div className='Item ItemCollumn' key={produto.id}>
        <ImageSmall/>
        <div className="ItemBodyRow ItemBodyPagamento">
          <div className="ItemBodyRowTitle ItemBodyPagamentoTitle">
            <div className='ItemTitle ItemTitlePagamento'>{produto.productId.nome}</div>
          </div>
          <div className="ItemBodyRowDescription ItemBodyPagamentoDescription">
            <div className='ItemBodyText'>QTD: {produto.quantidade}</div>
          </div>
          <div className="ItemBodyRowDescription ItemBodyPagamentoDescription">
            <div className='ItemBodyText'>PREÇO: {produto.productId.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
          </div>
          <div className="ItemBodyRowDescription ItemBodyPagamentoDescription">
            <div className='ItemBodyText'>TOTAL: {(produto.quantidade * produto.productId.preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
          </div>
        </div>
    </div>
  );
}

export default Item
