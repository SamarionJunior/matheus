import React from 'react';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

import List from './components/List';

const Pedidos = () => {

  return (
    <div>
      
      <Links/>
      
      <Title title={"Pedidos"}/>

      <List/>

      <Footer footer={"Footer"}/>

    </div>
  );

}

export default Pedidos