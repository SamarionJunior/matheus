import { createAction } from "@reduxjs/toolkit"

export const setState = createAction("SET_STATE"); 

export const setProdutos = createAction("SET_PRODUTOS");

export const setProdutosById = createAction("SET_PRODUTOS_ID");

export const deleteProdutoById = createAction("DELETE_PRODUTOS_ID");

export const setStatus = createAction("SET_STATUS");

export const setCarrinho = createAction("SET_CARRINHO");

export const getCarrinho = createAction("GET_CARRINHO");

export const clearCarrinhoById = createAction("CLEAR_CARRINHO_BY_ID");

export const clearCarrinho = createAction("CLEAR_CARRINHO");

export const setPagamento = createAction("SET_PAGAMENTO");

export const getPagamento = createAction("GET_PAGAMENTO");

export const setPedidos = createAction("SET_PEDIDOS");