import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
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
1. Create our actions (DONE) 
2. Create our reducers (DONE) 
3. Create store (DONE) 
3. Create header component (DONE) 
4. Create google auth component (DONE)
5. Get Redux Chrome Extension Working (DONE)
*/
