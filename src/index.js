import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter } from "react-router-dom";

import App from './App';

// import { QueryClientProvider } from 'react-query';
// import { queryClient } from './services/queryClient';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <Provider store={store}>
    {/* <QueryClientProvider client={queryClient}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </QueryClientProvider> */}
  </Provider>
);