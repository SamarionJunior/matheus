import React, { useState } from 'react';

import { useDispatch } from "react-redux";

import * as ListActions from "../../store/actions/produtos"

const Formulario = ({}) => {

  const dispatch = useDispatch()

  const [nome, setNome] = useState()
  const [quantidade, setQuantidade] = useState()
  const [preco, setPreco] = useState()

  const onSubmit = e => {
    e.preventDefault()
    dispatch(ListActions.setProdutos(nome, quantidade, preco))
  }

  return (
    <div>
        <form id='Formulario' onSubmit={e => onSubmit(e)}>
        <input type="text" onChange={e => setNome(String(e.target.value))} placeholder='nome'/>
        <input type="number" onChange={e => setQuantidade(Number(e.target.value))} placeholder='quantidade'/>
        <input type="number" onChange={e => setPreco(Number(e.target.value))} placeholder='preço'/>
        <button>Salvar</button>
        </form>
    </div>
  )
}

export default (Formulario)