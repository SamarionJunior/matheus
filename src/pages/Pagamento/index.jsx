import './style.css'

import React from 'react';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

import SelectPay from './components/SelectPay';
import Actions from './components/Actions';
import List from './components/List';

const Pagamento = () => {

  return (
    <div>
      
      <Links/>
      
      <Title title={"Pagamento"}/>

      <SelectPay/>

      <List/>

      <Actions/>

      <Footer footer={"Footer"}/>

    </div>
  );
}

export default Pagamento
