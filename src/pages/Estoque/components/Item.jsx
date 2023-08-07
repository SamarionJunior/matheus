import React, { useState } from 'react';

import { useDispatch } from "react-redux";

import * as ListActions from "../../../store/actions/produtos"

import {ImageSmall} from '../../../components/Image';

const Item = ({item}) => {

    const dispatch = useDispatch()

    const [isEdicaoHabilitada, setIsEdicaoHabilitada] = useState(false)

    const id = item.id
    const [nome, setNome] = useState(item.nome)
    const [preco, setPreco] = useState(item.preco)
    const [quantidade, setQuantidade] = useState(item.quantidade)

    const clear = () => {setNome(item.nome); setPreco(item.preco); setQuantidade(item.quantidade)}

    const change = (callback, tipo, value) => isEdicaoHabilitada ? callback(tipo(value)) : null

    return (
        <div className='Item ItemCollumn'>
            <ImageSmall/>

            <div className="ItemBodyRow ItemBodyEstoque">
                <div className="ItemBodyRowDescription ItemBodyEstoqueDescription">
                    <input className='ItemBodyRowInput ItemBodyRowInputTitle' type="text" value={nome} onChange={(e) => change(setNome, String, e.target.value)}/>
                    <input className='ItemBodyRowInput ItemBodyRowInputPreco' type="number" step="0.01" value={preco} onChange={(e) => change(setPreco, Number, e.target.value)}/>
                    <input className='ItemBodyRowInput ItemBodyRowInputQuantidade' type="number" step="0.01" value={quantidade} onChange={(e) => change(setQuantidade, Number, e.target.value)}/>
                </div>
                <div className='ItemBodyRowActions ItemBodyEstoqueActions'>
                    {!isEdicaoHabilitada ? 
                        <>
                            <button className='ItemEstoque-Button' onClick={(e) => {setIsEdicaoHabilitada(true)}}>Habilitar Edição</button>
                            <button className='ItemEstoque-Button' disabled>Salvar Edição</button>
                            <button className='ItemEstoque-Button' disabled>Apagar</button>
                        </>
                            : 
                        <>
                            <button className='ItemEstoque-Button' onClick={(e) => {setIsEdicaoHabilitada(false); clear() }}>Cancelar Edição</button>
                            <button className='ItemEstoque-Button' onClick={(e) => {dispatch(ListActions.setProdutosById(id, nome, quantidade, preco))}}>Salvar Edição</button>
                            <button className='ItemEstoque-Button' onClick={(e) => {dispatch(ListActions.deleteProdutoById(id));}}>Apagar</button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default (Item)