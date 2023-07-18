import { combineReducers } from "redux";

import produtos from "./produtos";
import carrinho from "./carrinho";
import pagamento from "./pagamento";
import pedidos from "./pedidos";

export default combineReducers({
    produtos,
    carrinho,
    pagamento,
    pedidos
})