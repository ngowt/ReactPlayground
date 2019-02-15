import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { reducers } from "./reducers/";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

/*
1. npm install react-router-dom
2. npm install redux-form
3. Setup routes in App component
4. Add form reducer to the list of reducers
5. Setup field components in form
*/
