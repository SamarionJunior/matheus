// import '../style.css'

import React , {useEffect, useState} from 'react';
import { useSelector } from "react-redux";

import { selectors } from '../../../store/selectors/produtos';

import Warning from '../../../components/Warning';

import Item from './Item';

const List = () => {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {

    async function fetchData() {

      const response = await fetch('http://localhost:3030/produto/', {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "User-Agent": "Insomnia/2023.5.4",
            "Access-Control-Allow-Origin": 'http://localhost:3030',
            "Access-Control-Allow-Credentials": true
        }
      });

      const json = await response.json();

      const auxprodutos = json.produtos;

      auxprodutos.map(p => setProdutos(pro => [... pro, p]))

    }

    fetchData();

  }, [])

  // const produtos = useSelector(selectors.getProdutos)

  return (
      <div className="contl contlProdutos">

        <div className="Lista ListaColumn">
          
          {produtos.length !== 0 ? 
            produtos.map(produto => {produto.id = produto._id; return (
              <Item produto={produto} key={produto.id}/>
            )}) :(
            <Warning text={"Nenhum produto no estoque"}/>
          )}
          
        </div>

      </div>
  );
}

export default List