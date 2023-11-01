import './style.css'

import React from 'react';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Total from '../../components/Total';

import Actions from './components/Actions';
import List from './components/List';

import { useSelector } from 'react-redux';
import { selectors } from '../../store/selectors/produtos';

const Pagamento = () => {

  const produtos = useSelector(selectors.getPaymentArea)

  return (
    <div>
      
      <Links/>
      
      <Title title={"Pagamento"}/>

      <List produtos={produtos}/>

      <Total produtos={produtos}/>

      <Actions produtos={produtos}/>

      <Footer footer={"Footer"}/>

    </div>
  );
}

export default Pagamento
