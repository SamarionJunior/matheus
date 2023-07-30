import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as ListActions from "../../store/actions/produtos"
import { selectors } from '../../store/selectors/produtos';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Warning from '../../components/Warning';

const Produtos = () => {

  const dispatch = useDispatch()

  const produtos = useSelector(selectors.getProdutos)

  return (
    <div className='Content'>
      <Links></Links>
      
      <Title title={"Produtos"}/>

      <div className="contl">

        <div className='Lista'>
          
          {produtos.length !== 0 ? 
            produtos.map(produto => (
              <div key={produto.id} className='Item'>
                <div className='Item-Imagem'/>
                <div className='Item-Body'>
                  <div className='Item-Body-Title'>
                    {produto.nome}
                  </div>
                  <div className='Item-Body-Description'>
                    {produto.descricao}
                  </div>
                  <div className="Item-Body-Footer">
                    <div className='Item-Body-Price'>
                      {produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    </div>
                    {produto.quantidade <= 0 ?
                      <div className='Item-Body-Warning'>(Produto esgotado)</div> : 
                      <button className='Item-Body-Action' onClick={e => dispatch(ListActions.setCarrinho(produto.id))}>adicionar</button>}
                  </div>
                </div>
              </div>
            )) : (
              <Warning text={"Nenhum produto no estoque"}/>
            )
          }
        
        </div>

      </div>

      <Footer footer={"Footer"}/>
      
    </div>
  );
}

export default Produtos