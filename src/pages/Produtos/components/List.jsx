// import '../style.css'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { selectors } from '../../../store/selectors/produtos';

import Warning from '../../../components/Warning';

import Item from './Item';
import { getAllCars } from '../../../store/fetchActions';

const List = () => {
  const produtos = useSelector(selectors.getProdutos)

  const dispatch = useDispatch()

  useEffect(() => {
    getAllCars(dispatch)
  }, [])

  return (
      <div className="contl contlProdutos">

        <div className="Lista ListaColumn">

          {

              produtos !== undefined && produtos.length !== 0 ? 
                produtos.map(produto => (
                    <Item produto={produto} key={produto.id}/>
                )) : (
                <Warning text={"Nenhum produto no estoque"}/>
              )
          
          }
          
        </div>

      </div>
  );
}

export default List

// useEffect(() => {

//   async function fetchData() {

//     const response = await fetch('http://localhost:3030/produto/', {
//       method: 'GET',
//       headers: {
//           "Content-Type": 'application/json',
//           "User-Agent": "Insomnia/2023.5.4",
//           "Access-Control-Allow-Origin": 'http://localhost:3030',
//           "Access-Control-Allow-Credentials": true
//       }
//     });

//     const json = await response.json();

//     const auxprodutos = json.produtos;

//     auxprodutos.map(p => setProdutos(pro => [... pro, p]))

//   }

//   fetchData();

// }, [])




  // const dispatch = useDispatch()

  // const [newProdutos, setNewProdutos] = useState([])

  // const produtos = useSelector(selectors.getProdutos)

  // const {data, isFetching} = useQuery('repos', async () => {
  //   const response = await axios.get("http://localhost:3030/produto/")
  //   return response.data.produtos;
  //   // return response.data.produtos.map(p => setNewProdutos(pro => [... pro, p]));

  //   // const newStates = Object.assign([], produtos);
  // })

  // useEffect(() => {
  //   if(data){
  //     data.map(p => setNewProdutos(pro => [... pro, p]));
  //   }
  // }, [data])

  // useEffect(() => {
  //   if(newProdutos){
  //     dispatch(ListActions.setState(newProdutos))
  //   }
  // }, [newProdutos])

  // console.log(produtos)