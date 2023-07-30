import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as ListActions from "../../store/actions/produtos"
import { selectors } from '../../store/selectors/produtos';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Warning from '../../components/Warning';

const Estoque = () => {

  const dispatch = useDispatch()

  const produtos = useSelector(selectors.getProdutos)

  const newProdutos = produtos.filter(produto => produto.NosPedidos > 0)

  return (
    <div>
      <Links></Links>
      
      <Title title={"Estoque"}/>

      <div className="contl">

        <div className="Lista">

          {newProdutos.length !== 0 ? produtos.map(produto => (
            <div key={produto.id} className='ItemPainel'>
              <div className='ItemPainel-Imagem'/>
              <div className='ItemPainel-Nome'>{produto.nome}</div>
              <div className='ItemPainel-Quantidade'>{produto.NosPedidos}</div>
              <div className='ItemPainel-Status'>{produto.status}</div>
              <button className='ItemPainel-Actions' onClick={_ => dispatch(ListActions.setStatus(produto.id, "Em Produção"))}>Em Produção</button>
              <button className='ItemPainel-Actions' onClick={_ => dispatch(ListActions.setStatus(produto.id, "Em Transito"))}>Em Transito</button>
              <button className='ItemPainel-Actions' onClick={_ => dispatch(ListActions.setStatus(produto.id, "Entregue"))}>Entregue</button>
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

export default Estoque