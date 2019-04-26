import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./components/App";
import Landing from "./components/Landing";
import About from "./components/About";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import Signout from "./components/auth/Signout";
import PlantsList from "./components/PlantsList";

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") }
  },
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Landing} />
        <Route path="/about" exact component={About} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signout" exact component={Signout} />
        <Route path="/plants" exact component={PlantsList} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
