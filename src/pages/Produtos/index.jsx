import React from 'react';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

import List from './components/List';

const Produtos = () => {

  return (
    <div className='Content'>
      
      <Links></Links>
      
      <Title title={"Produtos"}/>

      <List/>

      <Footer footer={"Footer"}/>
      
    </div>
  );
}

export default Produtos