import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Routes from './routes';

import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Routes />
    </div>
  </BrowserRouter>
);

export default hot(App);
