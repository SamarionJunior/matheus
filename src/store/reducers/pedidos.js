import INITIAL_STATE from "../states/pedidos"

export default function pedidos(state = INITIAL_STATE, action){
    if(action.type === 'SET_PEDIDOS'){
        return {
            ...state,
            pedidos: action.pedidos
        }
    }
    return state
}