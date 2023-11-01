import './style.css'

import React from 'react';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Total from '../../components/Total';

import List from './components/List';
import Actions from './components/Actions';

import { useSelector } from 'react-redux';

import { selectors } from '../../store/selectors/produtos';

const Carrinho = () => {

  const produtos = useSelector(selectors.getShoppingCar)

  return (
    <div>
      
      <Links/>
      
      <Title title={"Carrinho"}/>

      <List produtos={produtos}/>

      <Total produtos={produtos}/>

      <Actions/>

      <Footer footer={"Footer"}/>

    </div>
  );
}

export default Carrinho
