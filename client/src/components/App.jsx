import React from 'react';
import { hot } from 'react-hot-loader/root';
import Item from './Item';

import './App.css';

const App = () => (
  <div className="App">
    <h1> Hello, World! </h1>
    <Item />
  </div>
);

export default hot(App);
