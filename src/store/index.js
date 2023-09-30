import { configureStore } from '@reduxjs/toolkit'

// import rootReducer from "./reducers"

// const store = createStore(rootReducer);

import produtos from "./reducers/produtos";
import shoppingcar from "./reducers/shoppingcar";
import paymentarea from "./reducers/paymentarea";
import order from "./reducers/order";

const store = configureStore({
    reducer: {
        produtos: produtos.reducer,
        shoppingcar: shoppingcar.reducer,
        paymentarea: paymentarea.reducer,
        order: order.reducer,
    }
});

export default store