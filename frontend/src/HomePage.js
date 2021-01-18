import './Main.css';
import Header from './header-component';
import Midpage from './midpage-component';
import React, { Component } from 'react';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="Main">
            <Header />
            <Midpage />
        </div>
    );
  }
}