import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Search from "./features/search/Search";
import registerServiceWorker from "./registerServiceWorker";

import "antd/dist/antd.css";

import promiseMiddleware from "redux-promise-middleware";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./features/search/redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
);
ReactDOM.render(
  <Provider store={store}>
    <Search />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
