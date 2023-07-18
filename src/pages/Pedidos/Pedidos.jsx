import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ListActions from "../../store/actions/pedidos"

import { Link } from "react-router-dom";

const Pedidos = ({produtos}) => {
  function createListaDeProdutosNosPedidos(){
    const isNosPedidos = produtos.filter(produto => produto.NosPedidos > 0)
    if(isNosPedidos.length !== 0){
      return isNosPedidos.map(produto => (
        <div key={produto.id}>
          <div>{produto.nome}</div>
          <div>{produto.NosPedidos}</div>
          <div>{produto.status}</div>
        </div>)
      )
    }
  }
  return (
    <div>
        <h1>Pedidos</h1>
        <div>
          {createListaDeProdutosNosPedidos()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Pedidos)