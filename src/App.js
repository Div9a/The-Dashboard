import React from "react";
import "./index.css";

import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/users">
            <List />
          </Route>
          <Route path="/newUser">
            <New />
          </Route>
          <Route path="/:userId">
            <Single />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
