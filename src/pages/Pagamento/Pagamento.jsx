import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ListActions from "../../store/actions/produtos"

import { Link } from "react-router-dom";

const Pagamento = ({produtos, setPedidos, getPagamento}) => {
  function createListaDeProdutosEmProcessamento(){
    const isEmProcessamento = produtos.filter(produto => produto.emProcessoDePagamento > 0)
    if(isEmProcessamento.length !== 0){
      return isEmProcessamento.map(produto => (
        <div key={produto.id}>
          <div>{produto.nome}</div>
          <div>{produto.emProcessoDePagamento}</div>
          <div>{produto.emProcessoDePagamento * produto.preco}</div>
        </div>)
      )
    }
  }
  return (
    <div>
        <h1>Pagamento</h1>
        <div>
          {createListaDeProdutosEmProcessamento()}
          <button onClick={e => setPedidos(produtos)}>adicionar</button>
          <button onClick={e => getPagamento(produtos)}>cancelar</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Pagamento)
