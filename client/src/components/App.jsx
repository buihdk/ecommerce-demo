import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import HomePage from '../pages/HomePage';
import ItemPage from '../pages/ItemPage';
import NotFoundPage from '../pages/NotFoundPage';
import ListItem from './ListItem';

import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/item">Item</Link>
            </li>
            <li>
              <Link to="/404">Not Found</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/item">
            <ItemPage />
          </Route>
          <Route path="/404">
            <NotFoundPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    <ListItem />
  </div>
);

export default hot(App);
