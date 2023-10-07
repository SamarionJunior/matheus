import './style.css'

import React from 'react';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

import List from './components/List';
import { useSelector } from 'react-redux';
import { selectors } from '../../store/selectors/produtos';

const Estoque = () => {

  const produtos = useSelector(selectors.getOrder)

  return (
    <div>
      
      <Links/>
      
      <Title title={"Painel"}/>

      <List produtos={produtos}/>
      
      <Footer footer={"Footer"}/>

    </div>
  );
}

export default Estoque