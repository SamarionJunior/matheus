import INITIAL_STATE from "../states/carrinho"

export default function carrinho(state = INITIAL_STATE, action){
    if(action.type === 'SET_CARRINHO'){
        const carrinhoAntigo = state.carrinho
        const carrinhoNovo = action.carrinho
        carrinhoAntigo.push(carrinhoNovo)
        const auxiliarCarrinho = carrinhoAntigo
        return {
            ...state,
            carrinho: auxiliarCarrinho
        }
    }
    return state
}

// export default function carrinho(state = INITIAL_STATE, action){
//     const newCarrinho = action.carrinho
//     console.log("reducers", [
//         ...state,
//         newCarrinho
//     ])
//     if(action.type === 'SET_CARRINHO'){
//         return [
//             ...state,
//             newCarrinho
//         ]
//     }
//     return state
// }