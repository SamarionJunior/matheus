import './style.css'

import React from 'react';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

import Actions from './components/Actions';
import List from './components/List';
import Total from '../Carrinho/components/Total';

const Pagamento = () => {

  return (
    <div>
      
      <Links/>
      
      <Title title={"Pagamento"}/>

      <List/>

      <Total/>

      <Actions/>

      <Footer footer={"Footer"}/>

    </div>
  );
}

export default Pagamento
