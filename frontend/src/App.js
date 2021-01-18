import Logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// eslint-disable-next-line
import OtherPage from "./OtherPage"
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: (<div className="App">
        <header className="App-header">
          <Logo className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>),
    };
  }

  render() {
    return (<Router>
      <Switch>
        <Route exact path='/'>{this.state.home}</Route>
        <Route path='/other' component={OtherPage}/>
      </Switch>
    </Router>);
  }
}