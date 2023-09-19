import React, { useState } from 'react';

import { useDispatch } from "react-redux";

import { createProductInProductsList } from '../../../store/fetchActions';

const Formulario = () => {

  const dispatch = useDispatch()

  const [nome, setNome] = useState()
  const [quantidade, setQuantidade] = useState()
  const [preco, setPreco] = useState()

  const onSubmit = e => {
    e.preventDefault()
    dispatch(createProductInProductsList({nome: nome, quantidade: quantidade, preco: preco}))
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