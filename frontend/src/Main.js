import './Main.css';
import Header from './header-component';
import Midpage from './midpage-component';
import React, { Component } from 'react';
import OtherPage from "./OtherPage"
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: (<div className="Main">
      <Header />
      <Midpage />
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