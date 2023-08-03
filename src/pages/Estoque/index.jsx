import './style.css'

import React from 'react';

import { useSelector } from "react-redux";
import { selectors } from '../../store/selectors/produtos';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

import Formulario from './components/Formulario';
import Lista from './components/Lista';
import Item from './components/Item';

const Estoque = () => {

  const produtos = useSelector(selectors.getProdutos)

  return (
    <div>
      <Links/>
      
      <Title title={"Estoque"}/>

      <Formulario/>

      <Lista items={produtos} component={<Item/>}/>

      <Footer footer={"Footer"}/>

    </div>
  );
}

export default (Estoque)