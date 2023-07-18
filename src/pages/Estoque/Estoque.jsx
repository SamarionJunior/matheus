import React, { useState } from 'react';

import { useDispatch, useSelector, useStore } from "react-redux";

import * as ListActions from "../../store/actions/produtos"

import { Link } from "react-router-dom";
import { selectors } from '../../store/selectors/produtos';

const Estoque = ({}) => {

  const produtos = useSelector(selectors.getProdutos)

  const dispatch = useDispatch()

  const store = useStore()

  const [a, b] = useState('')
  console.log(store.getState().produtos.produtos)

  // const [update, setUpdate] = useState(false)

  const [nome, setNome] = useState()
  const [quantidade, setQuantidade] = useState()
  const [preco, setPreco] = useState()

  const onSubmit = e => {
    e.preventDefault()
    dispatch(ListActions.setProdutos(nome, quantidade, preco))
    // b('a')
  }

  function createFormularioDeCadastroDeProdutos(){
    return (
      <form id='formulario' onSubmit={e => onSubmit(e)}>
        <input type="text" onChange={e => setNome(String(e.target.value))} placeholder='nome'/>
        <input type="number" onChange={e => setQuantidade(Number(e.target.value))} placeholder='quantidade'/>
        <input type="number" onChange={e => setPreco(Number(e.target.value))} placeholder='preco'/>
        <button>Salvar</button>
      </form>
    )
  }

  function createListaDeProdutos(auxProdutos){

    const Item = ({produto}) => {

      const [isEdicaoHabilitada, setIsEdicaoHabilitada] = useState(false)

      const id = produto.id

      const [nome, setNome] = useState(produto.nome)
      const [preco, setPreco] = useState(produto.preco)
      const [quantidade, setQuantidade] = useState(produto.quantidade)

      const clear = () => {
        setNome(produto.nome)
        setPreco(produto.preco)
        setQuantidade(produto.quantidade)
      }

      const change = (callback, tipo, value) => isEdicaoHabilitada ? callback(tipo(value)) : null

      return (
      <div>
        <input type="text" value={nome} onChange={(e) => change(setNome, String, e.target.value)}/>
        <input type="number" value={preco} onChange={(e) => change(setPreco, Number, e.target.value)}/>
        <input type="number" value={quantidade} onChange={(e) => change(setQuantidade, Number, e.target.value)}/>
        {!isEdicaoHabilitada ? 
          <div>
            <button onClick={(e) => {setIsEdicaoHabilitada(true)}}>Habilitar Edição</button>
            <button disabled>Salvar Edição</button>
            <button disabled>Apagar</button>
          </div>
          : 
          <div>
            <button onClick={(e) => {setIsEdicaoHabilitada(false); clear() }}>Cancelar Edição</button>
            <button onClick={(e) => {dispatch(ListActions.setProdutosById(id, nome, quantidade, preco))}}>Salvar Edição</button>
            <button onClick={(e) => {dispatch(ListActions.deleteProdutoById(id));}}>Apagar</button>
          </div>}
      </div>)
    }

    return auxProdutos.map(produto => <Item key={produto.id} produto={produto}/>)
  }

  return (
    <div>
        <h1>Estoque</h1>
        <div>{createFormularioDeCadastroDeProdutos()}</div>
        <div>{createListaDeProdutos(produtos)}</div>
        <div>
          <Link to="/Produtos">Produtos</Link>
          <Link to="/Carrinho">Carrinho</Link>
          <Link to="/Pagamento">Pagamento</Link>
          <Link to="/Pedidos">Pedidos</Link>
          <Link to="/Estoque">Estoque</Link>
          <Link to="/Painel">Painel</Link>
        </div>
    </div>
  );
}

export default (Estoque)

// const mapStateToProps = state => ({
//   produtos: state.produtos.produtos,
// })

// const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Estoque)