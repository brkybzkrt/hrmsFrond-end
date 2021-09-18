import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux"
import {configureStore} from "./store/configureStore"
import rootReducer from './store/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



const store = configureStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

