import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as ListActions from "../../store/actions/produtos"
import { selectors } from '../../store/selectors/produtos';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

const Carrinho = () => {

  const dispatch = useDispatch()

  const produtos = useSelector(selectors.getProdutos)

  const isNoCarrinho = produtos.filter(produto => produto.noCarrinho > 0);

  return (
    <div>
      <Links></Links>
      
      <Title title={"Carrinho"}/>

      <div>

        {
          isNoCarrinho.length !== 0 ? 
            isNoCarrinho.map(produto => (
              <div key={produto.id}>
                <div>{produto.nome}</div>
                <div>{produto.noCarrinho}</div>
                <button onClick={e => dispatch(ListActions.setCarrinho(produto.id))}>adicionar</button>
                <button onClick={e => dispatch(ListActions.getCarrinho(produto.id))}>remover</button>
              </div>
            )) :(
              <div>Carrinho vazio!</div>
            )
        }

        {
          isNoCarrinho.length !== 0 ? (<>
            <button onClick={e => dispatch(ListActions.setPagamento(produtos))}>adicionar</button>
            <button onClick={e => dispatch(ListActions.clearCarrinho(produtos))}>Limpar Carrinho</button>
          </>) : null
        }

      </div>

      <Footer footer={"Footer"}/>

    </div>
  );
}

export default Carrinho
