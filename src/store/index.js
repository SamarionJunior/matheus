import { configureStore } from '@reduxjs/toolkit'

// import rootReducer from "./reducers"

// const store = createStore(rootReducer);

import produtos from "./reducers/produtos";

const store = configureStore({
    reducer: {
        produtos: produtos.reducer,
    }
});

export default store