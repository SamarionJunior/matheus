// import '../style.css'

import React , {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import * as ListActions from "../../../store/actions/produtos"

import { selectors } from '../../../store/selectors/produtos';

import Warning from '../../../components/Warning';

import Item from './Item';

import { useQuery } from 'react-query';
import axios from 'axios';

const List = () => {

  const dispatch = useDispatch()

  const [newProdutos, setNewProdutos] = useState([])

  const produtos = useSelector(selectors.getProdutos)

  const {data, isFetching} = useQuery('repos', async () => {
    const response = await axios.get("http://localhost:3030/produto/")
    return response.data.produtos;
    // return response.data.produtos.map(p => setNewProdutos(pro => [... pro, p]));

    // const newStates = Object.assign([], produtos);
  })

  useEffect(() => {
    if(data){
      data.map(p => setNewProdutos(pro => [... pro, p]));
    }
  }, [data])

  useEffect(() => {
    if(newProdutos){
      dispatch(ListActions.setState(newProdutos))
    }
  }, [newProdutos])

  // console.log(produtos)

  return (
      <div className="contl contlProdutos">

        <div className="Lista ListaColumn">

          
          {
            // isFetching ?

              produtos !== undefined && produtos !== [] && produtos.length !== 0 ? 
                produtos.map(produto => {
                  produto.id = produto._id; 
                  console.log(produto.id);
                  return (
                    <Item produto={produto} key={produto.id}/>
                )}) :(
                <Warning text={"Nenhum produto no estoque"}/>
              )
            
            // : null
          
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
