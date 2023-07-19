import React from 'react';

import Formulario from './Formulario';
import Lista from './Lista';

import Links from '../../components/Links';

const Estoque = () => {

  return (
    <div>
        <h1>Estoque</h1>
        <Formulario></Formulario>
        <Lista></Lista>
        <Links></Links>
    </div>
  );
}

export default (Estoque)