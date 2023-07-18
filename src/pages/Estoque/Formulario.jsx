// import React, { useState } from 'react';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import * as ListActions from "../../store/actions/produtos"

// const Formulario = ({setProdutos}) => {

//   const [nome, setNome] = useState()
//   const [quantidade, setQuantidade] = useState()
//   const [preco, setPreco] = useState()

//   function createFormularioDeCadastroDeProdutos(){
//     return (
//       <form id='formulario'>
//         <input type="text" onChange={e => setNome(String(e.target.value))} placeholder='nome'/>
//         <input type="number" onChange={e => setQuantidade(Number(e.target.value))} placeholder='quantidade'/>
//         <input type="number" onChange={e => setPreco(Number(e.target.value))} placeholder='preco'/>
//         <button onClick={e => {e.preventDefault(); setProdutos(nome, quantidade, preco)}}>Salvar</button>
//       </form>
//     )
//   }

//   return (<div>{createFormularioDeCadastroDeProdutos()}</div>);
// }

// const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

// export default connect(null, mapDispatchToProps)(Formulario)