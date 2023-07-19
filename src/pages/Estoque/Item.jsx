import React, { useState } from 'react';

import { useDispatch } from "react-redux";

import * as ListActions from "../../store/actions/produtos"

const Item = ({produto}) => {

    const dispatch = useDispatch()

    const [isEdicaoHabilitada, setIsEdicaoHabilitada] = useState(false)

    const [id, _ ] = useState(produto.id)
    const [nome, setNome] = useState(produto.nome)
    const [preco, setPreco] = useState(produto.preco)
    const [quantidade, setQuantidade] = useState(produto.quantidade)

    const clear = () => {
        setNome(produto.nome)
        setPreco(produto.preco)
        setQuantidade(produto.quantidade)
    }

    const change = (callback, tipo, value) => isEdicaoHabilitada ? callback(tipo(value)) : null

    return (
        <div>
            <input type="text" value={nome} onChange={(e) => change(setNome, String, e.target.value)}/>
            <input type="number" value={preco} onChange={(e) => change(setPreco, Number, e.target.value)}/>
            <input type="number" value={quantidade} onChange={(e) => change(setQuantidade, Number, e.target.value)}/>
            {!isEdicaoHabilitada ? 
                <div>
                    <button onClick={(e) => {setIsEdicaoHabilitada(true)}}>Habilitar Edição</button>
                    <button disabled>Salvar Edição</button>
                    <button disabled>Apagar</button>
                </div>
                    : 
                <div>
                    <button onClick={(e) => {setIsEdicaoHabilitada(false); clear() }}>Cancelar Edição</button>
                    <button onClick={(e) => {dispatch(ListActions.setProdutosById(id, nome, quantidade, preco))}}>Salvar Edição</button>
                    <button onClick={(e) => {dispatch(ListActions.deleteProdutoById(id));}}>Apagar</button>
                </div>
            }
        </div>
    );
}

export default (Item)