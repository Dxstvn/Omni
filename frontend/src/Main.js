import './Main.css';
import NotificationBar from './NotificationBar';
import React, { Component } from 'react';
import HomePage from "./HomePage";
import homeGif from '../assets/rpreplay-final1610763893-1@1x';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

const omniLogo = (
    <div className="vector-text row">
          <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-4@2x.svg"} alt=""/>
          <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-1@2x.svg"} alt=""/>
          <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-2@2x.svg"} alt=""/>
          <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-3@2x.svg"} alt=""/>
    </div>
);

const signUpText = (
    <div className='spaced-vector-text row'>
        <div className="vector-text row">
              <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-6@2x.svg"} alt=""/>
              <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-7@2x.svg"} alt=""/>
              <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-8@2x.svg"} alt=""/>
              <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-9@2x.svg"} alt=""/>
        </div>
        <div className="vector-text row">
              <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-10@2x.svg"} alt=""/>
              <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-11@2x.svg"} alt=""/>
        </div>
    </div>
);

const logInText = (
    <div className='spaced-vector-text row'>
        <div className="vector-text row">
              <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-12@2x.svg"} alt=""/>
              <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-13@2x.svg"} alt=""/>
              <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-14@2x.svg"} alt=""/>
        </div>
        <div className="vector-text row">
              <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-15@2x.svg"} alt=""/>
              <img src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-16@2x.svg"} alt=""/>
        </div>
    </div>
);

export default class Main extends Component {
  constructor(props) {
    super(props);
    const homePage = (
        <div className="Main">
            <NotificationBar />
            <div className='screen'>
                <div className='screen-omni-logo'>{omniLogo}</div>
                <img className="home-gif" src={homeGif} />
                <p className='screen-text'>
                    Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <a className='screen-sign-up' href={'/home'}>
                    {signUpText}
                    <img className='screen-sign-up-box' src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-5@2x.svg"} />
                </a>
                <a className='screen-log-in' href={'/home'}>
                    {logInText}
                    <svg className='screen-log-in-box' src={"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-5@2x.svg"} />
                </a>
            </div>
        </div>
    );
    this.state = {
      home: homePage,
    };
  }

  render() {
    return (<Router>
      <Switch>
        <Route exact path='/'>{this.state.home}</Route>
        <Route path='/home' component={HomePage}/>
      </Switch>
    </Router>);
  }
}