import React from 'react';

import { useSelector } from "react-redux";
import { selectors } from '../../store/selectors/produtos';

import Formulario from './Formulario';
import Lista from './Lista';
import Item from './Item';

import Links from '../../components/Links';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

const Estoque = () => {

  const produtos = useSelector(selectors.getProdutos)

  return (
    <div>
      <Links></Links>
      
      <Title title={"Estoque"}/>

      <Formulario></Formulario>
      
      <div className="contl contlEstoque">

        <Lista items={produtos} component={<Item/>}/>

      </div>

      <Footer footer={"Footer"}/>

    </div>
  );
}

export default (Estoque)