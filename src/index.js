import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Root.js";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
