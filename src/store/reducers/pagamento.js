import INITIAL_STATE from "../states/pagamento"

export default function pagamento(state = INITIAL_STATE, action){
    if(action.type === 'SET_PAGAMENTO'){
        return {
            ...state,
            pagamento: action.pagamento
        }
    }
    return state
}