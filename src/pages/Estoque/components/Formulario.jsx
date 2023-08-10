import React, { useState } from 'react';

import { useDispatch } from "react-redux";

import * as ListActions from "../../../store/actions/produtos"

const Formulario = () => {

  const dispatch = useDispatch()

  const [nome, setNome] = useState()
  const [quantidade, setQuantidade] = useState()
  const [preco, setPreco] = useState()

  const onSubmit = e => {
    e.preventDefault()
    dispatch(ListActions.setProdutos(nome, quantidade, preco))
  }

  return (
    <div className='Form'>
        <form className='Formulario' id='Formulario' onSubmit={e => onSubmit(e)}>
          <input className="FormularioImput FormularioImputTitle" type="text" onChange={e => setNome(String(e.target.value))} placeholder='nome'/>
          <input className="FormularioImput" type="number" onChange={e => setQuantidade(Number(e.target.value))} placeholder='quantidade'/>
          <input className="FormularioImput" type="number" onChange={e => setPreco(Number(e.target.value))} placeholder='preço'/>
          <button className="FormularioImput FormularioImputButton">Salvar</button>
        </form>
    </div>
  )
}

export default Formulario