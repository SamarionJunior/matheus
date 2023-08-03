import React from 'react';
import { useSelector } from "react-redux";

import { selectors } from '../../../store/selectors/produtos';

const List = () => {

  const produtos = useSelector(selectors.getProdutos)

  const isEmProcessamento = produtos.filter(produto => produto.emProcessoDePagamento > 0)

  return (

    <div className="contl contlCarrinho contlPagamento">

        <div className="Lista ListaCarrinho ListaPagamento">

            {
            isEmProcessamento.length !== 0 ? 
            isEmProcessamento.map(produto => (
                <div className='ItemCarrinho' key={produto.id}>
                    <div className='ItemCarrinho-Imagem'/>
                    <div className='ItemCarrinho-Title'>{produto.nome}</div>
                    <div className='ItemCarrinho-Quantidade'>{produto.emProcessoDePagamento}</div>
                    <div className='ItemCarrinho-Quantidade'>{(produto.emProcessoDePagamento * produto.preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                </div>
                )) : null
            }
        
        </div>
    
    </div>

  );
}

export default List
