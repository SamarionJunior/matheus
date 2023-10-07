import React, { useEffect } from 'react';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

import List from './components/List';

import { useSelector } from 'react-redux';

import { selectors } from '../../store/selectors/produtos';

const Produtos = () => {

  const produtos = useSelector(selectors.getProdutos)

  return (
    <div className='Content'>
      
      <Links></Links>
      
      <Title title={"Produtos"}/>

      <List produtos={produtos}/>

      <Footer footer={"Footer"}/>
      
    </div>
  );
}

export default Produtos