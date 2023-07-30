import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as ListActions from "../../store/actions/produtos"
import { selectors } from '../../store/selectors/produtos';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Warning from '../../components/Warning';

const Carrinho = () => {

  const dispatch = useDispatch()

  const produtos = useSelector(selectors.getProdutos)

  const isNoCarrinho = produtos.filter(produto => produto.noCarrinho > 0);

  return (
    <div>
      <Links></Links>
      
      <Title title={"Carrinho"}/>

      <div className="contl contlCarrinho">

        <div className="Lista ListaCarrinho">

          {
            isNoCarrinho.length !== 0 ? 
              isNoCarrinho.map(produto => (
                <div className='ItemCarrinho' key={produto.id}>
                  <div className='ItemCarrinho-Imagem'/>
                  <div className='ItemCarrinho-Title'>{produto.nome}</div>
                  <button className='ItemCarrinho-Actions' onClick={e => dispatch(ListActions.setCarrinho(produto.id))}>+</button>
                  <div className='ItemCarrinho-Quantidade'>{produto.noCarrinho}</div>
                  <button className='ItemCarrinho-Actions' onClick={e => dispatch(ListActions.getCarrinho(produto.id))}>-</button>
                </div>
              )) :(
                <Warning text={"Carrinho vazio!"}/>
              )
          }

        </div>

      </div>

      <div className="Actions">

        {
          isNoCarrinho.length !== 0 ? (<>
            <button onClick={e => dispatch(ListActions.clearCarrinho(produtos))}>Limpar Carrinho</button>
            <button onClick={e => dispatch(ListActions.setPagamento(produtos))}>adicionar</button>
          </>) : null
        }
        
      </div>

      <Footer footer={"Footer"}/>

    </div>
  );
}

export default Carrinho
