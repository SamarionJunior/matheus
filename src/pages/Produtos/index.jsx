import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as ListActions from "../../store/actions/produtos"
import { selectors } from '../../store/selectors/produtos';

import Links from '../../components/Links';

const Produtos = () => {

  const dispatch = useDispatch()

  const produtos = useSelector(selectors.getProdutos)

  return (
    <div className='Content'>
      <Links></Links>
      <h1>Produtos</h1>
      <div className='Lista'>
        
        {produtos.length !== 0 ? 
          produtos.map(produto => (
            <div key={produto.id}>
              <div>
                {produto.nome} {produto.quantidade <= 0 ? <div>(Produto esgotado)</div> : null}
              </div>
              {produto.quantidade > 0 ? <button onClick={e => dispatch(ListActions.setCarrinho(produto.id))}>adicionar</button> : null}
            </div>
          )) : (
            <div>Nenhum produto no estoque</div>
          )
        }
      
      </div>
    </div>
  );
}

export default Produtos