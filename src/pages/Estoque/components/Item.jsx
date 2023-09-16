import React, { useState } from 'react';

import { useDispatch } from "react-redux";

import {ImageSmall} from '../../../components/Image';
import { deleteProductById, updateProductById } from '../../../store/fetchActions';

const Item = ({item}) => {

    const dispatch = useDispatch()

    const [isEdicaoHabilitada, setIsEdicaoHabilitada] = useState(false)

    const id = item.id
    const [nome, setNome] = useState(item.nome)
    const [preco, setPreco] = useState(item.preco)
    const [quantidade, setQuantidade] = useState(item.quantidade)

    const clear = () => {setNome(item.nome); setPreco(item.preco); setQuantidade(item.quantidade)}

    const change = (callback, tipo, value) => isEdicaoHabilitada ? callback(tipo(value)) : null

    function adicinarEfeitoDeEdicao(status, id){
        const aux = document.getElementsByClassName(`ItemBodyRowInput${id}`)
        for(let i = 0; i < aux.length; i++){
            status ? aux[i].style.borderBottom = "3px solid black": aux[i].style.borderBottom = "3px solid transparent"
        }
    }

    return (
        <div className='Item ItemCollumn'>
            <ImageSmall/>
            <div className="ItemBodyRow ItemBodyEstoque">
                <div className="ItemBodyRowDescription ItemBodyEstoqueDescription">
                    <input className={`ItemBodyRowInput ItemBodyRowInputTitle ItemBodyRowInput${id}`} type="text" value={nome} onChange={(e) => change(setNome, String, e.target.value)}/>
                    <input className={`ItemBodyRowInput ItemBodyRowInputPreco ItemBodyRowInput${id}`} type="number" step="0.01" value={preco} onChange={(e) => change(setPreco, Number, e.target.value)}/>
                    <input className={`ItemBodyRowInput ItemBodyRowInputQuantidade ItemBodyRowInput${id}`} type="number" step="0.01" value={quantidade} onChange={(e) => change(setQuantidade, Number, e.target.value)}/>
                </div>
                <div className='ItemBodyRowActions ItemBodyEstoqueActions'>
                    {!isEdicaoHabilitada ? 
                        <>
                            <button className='ItemEstoque-Button' onClick={(e) => {setIsEdicaoHabilitada(true); adicinarEfeitoDeEdicao(true, id)}}>Hab</button>
                            <button className='ItemEstoque-Button' disabled>Sal</button>
                            <button className='ItemEstoque-Button' disabled>Apa</button>
                        </>
                            : 
                        <>
                            <button className='ItemEstoque-Button' onClick={(e) => {setIsEdicaoHabilitada(false); clear(); adicinarEfeitoDeEdicao(false, id)}}>Can</button>
                            <button className='ItemEstoque-Button' onClick={(e) => {dispatch(updateProductById(id, nome, quantidade, preco))}}>Sal</button>
                            <button className='ItemEstoque-Button' onClick={(e) => {dispatch(deleteProductById(id));}}>Apa</button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default (Item)