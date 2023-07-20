import React from 'react';

import Formulario from './Formulario';
import Lista from './Lista';
import Item from './Item';

import Links from '../../components/Links';

import { useSelector } from "react-redux";
import { selectors } from '../../store/selectors/produtos';

const Estoque = () => {

  const produtos = useSelector(selectors.getProdutos)

  return (
    <div>
      <Links></Links>
      <h1>Estoque</h1>
      <Formulario></Formulario>
      <Lista items={produtos} component={<Item/>}/>
    </div>
  );
}

export default (Estoque)