import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import phoneBezel from '../assets/phone_bezel.png'

ReactDOM.render(
  <React.StrictMode>
    <div
    style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
    >
    <Main />
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
