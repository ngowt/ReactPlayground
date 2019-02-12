import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { reducers } from "./reducers/";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

/*
    1. Create header component
    2. Create action creators
    3. Create reducers
    4. Create google auth component
    5. Get redux chrome debugging to work
    6. Create store
*/
