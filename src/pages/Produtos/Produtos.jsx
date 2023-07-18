import React, { useEffect, useState } from 'react';

import { connect, useStore } from "react-redux";
import { bindActionCreators } from "redux";

import * as ListActions from "../../store/actions/produtos"

import { Link } from "react-router-dom";

const Produtos = ({produtos, setCarrinho}) => {
  const store = useStore()
  const [ListaDeProdutos, setListaDeProdutos] = useState()
  function createListaDeProdutos(){
    // const newPordutos = produtos.filter(produto => produto.quantidade > 0)
    // if(newPordutos.length !== 0){
      return store.getState().produtos.produtos.map(produto => (
        <div key={produto.id}>
          <div>{produto.nome} {produto.quantidade <= 0 ? <div>(Produto esgotado)</div> : null}</div>
          {produto.quantidade > 0 ? <button onClick={e => setCarrinho(produto.id)}>adicionar</button> : null}
        </div>)
      )
    // }
    // return <div>Nenhum produto no estoque</div>
  }
  // useEffect(() => {
  //   setListaDeProdutos(createListaDeProdutos())
  // },[produtos ,produtos.quantidade])
  useEffect(() => {
    setListaDeProdutos(createListaDeProdutos())
  },[store.getState().produtos.produtos])
  return (
    <div>
        <h1>Produtos</h1>
        <div>{ListaDeProdutos}</div>
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

const mapStateToProps = state => ({
  produtos: state.produtos.produtos,
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Produtos)