import React, { Component } from 'react';
import "./App.css";
import Login from './Components/Login';
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
      <div className="all">
        <Switch>
          <Route path="/Signup">
          <Signup/>
          </Route>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/">
        <Login/>
        </Route>
        </Switch>
      </div>
      </Router>
    )
  }
}
