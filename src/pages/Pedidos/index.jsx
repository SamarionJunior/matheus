import React from 'react';
import { useSelector} from "react-redux";

import { selectors } from '../../store/selectors/produtos';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

const Pedidos = () => {

  const produtos = useSelector(selectors.getProdutos)

  const isNosPedidos = produtos.filter(produto => produto.NosPedidos > 0)

  return (
    <div>
      <Links></Links>
      
      <Title title={"Pedidos"}/>

      <div className="contl">

        <div className="Lista">

          {
            isNosPedidos.length !== 0 ?
              isNosPedidos.map(produto => (
                <div key={produto.id} className='Pedidos'>
                  <div className='ItemCarrinho-Imagem'/>
                  <div className='Pedidos-Nome'>{produto.nome}</div>
                  <div className='Pedidos-Quantidade'>{produto.NosPedidos}</div>
                  <div className='Pedidos-Status'>{produto.status}</div>
                </div>
              )) : null
          }

        </div>

      </div>

      <Footer footer={"Footer"}/>

    </div>
  );
}

export default Pedidos