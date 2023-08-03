import './style.css'

import React from 'react';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

import List from './components/List';

const Estoque = () => {

  return (
    <div>
      
      <Links/>
      
      <Title title={"Painel"}/>

      <List/>
      
      <Footer footer={"Footer"}/>

    </div>
  );
}

export default Estoque