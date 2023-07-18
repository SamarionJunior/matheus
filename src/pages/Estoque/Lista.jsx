// import React, { useEffect } from 'react';

// import { connect } from "react-redux";

// const Estoque = ({produtos}) => {

//   function createListaDeProdutos(){
//       return produtos.map(produto => (
//         <div key={produto.id}>
//           <div>{produto.nome}</div>
//           <div>{produto.quantidade}</div>
//         </div>)
//       )
//   }

//   return (<div>{createListaDeProdutos()}</div>);
// }

// const mapStateToProps = state => ({
//   produtos: state.produtos.produtos,
// })

// export default connect(mapStateToProps, null)(Estoque)