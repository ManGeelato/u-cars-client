import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// I am going to utilize Redux in this file. Firstly I imported redux dependencies from reducers, compose, thunk and applyMiddleware.
// I then created a variable that stores the information from my redux.
// I then created a prop and utilized Provider from redux to wrap my application passing the store prop to it
