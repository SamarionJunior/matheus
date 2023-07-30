import React, { useState } from 'react';

import { useDispatch } from "react-redux";

import * as ListActions from "../../store/actions/produtos"

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
        <div className='ItemEstoque'>
            <div className='ItemCarrinho-Imagem'/>
            <input className='ItemEstoque-Input' type="text" value={nome} onChange={(e) => change(setNome, String, e.target.value)}/>
            <input className='ItemEstoque-Input' type="number" value={preco} onChange={(e) => change(setPreco, Number, e.target.value)}/>
            <input className='ItemEstoque-Input' type="number" value={quantidade} onChange={(e) => change(setQuantidade, Number, e.target.value)}/>
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
    );
}

export default (Item)