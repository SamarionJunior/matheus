import './style.css'

import React from 'react';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

import List from './components/List';
import Actions from './components/Actions';

const Carrinho = () => {

  return (
    <div>
      
      <Links/>
      
      <Title title={"Carrinho"}/>

      <List/>

      <Actions/>

      <Footer footer={"Footer"}/>

    </div>
  );
}

export default Carrinho
