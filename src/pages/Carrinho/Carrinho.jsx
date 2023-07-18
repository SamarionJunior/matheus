import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ListActions from "../../store/actions/produtos"

import { Link } from "react-router-dom";

const Carrinho = ({produtos, setCarrinho, getCarrinho, setPagamento, clearCarrinho}) => {
  function createListaDeProdutosNoCarrinho(){
    const isNoCarrinho = produtos.filter(produto => produto.noCarrinho > 0);
    if(isNoCarrinho.length !== 0){
      // setAux(true)
      return isNoCarrinho.map(produto => (
        <div key={produto.id}>
          <div>{produto.nome}</div>
          <div>{produto.noCarrinho}</div>
          <button onClick={e => setCarrinho(produto.id)}>adicionar</button>
          <button onClick={e => getCarrinho(produto.id)}>remover</button>
        </div>
      ))
    }
    return (<div>Carrinho vazio!</div>)
  }
  return (
    <div>
        <h1>Carrinho</h1>
        <div>
          {createListaDeProdutosNoCarrinho()}
          {/* {aux ? <button onClick={e => setPagamento(produtos)}>adicionar</button> : null} */}
          <button onClick={e => setPagamento(produtos)}>adicionar</button>
          <button onClick={e => clearCarrinho(produtos)}>Limpar Carrinho</button>
          {console.log(produtos)}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho)
