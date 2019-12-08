import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Container } from '@material-ui/core';

import { fetchCategories } from '../services/localStorage';
import Routes from '../routes';

const App = () => {
  fetchCategories();

  return (
    <BrowserRouter>
      <Container fixed>
        <Routes />
      </Container>
    </BrowserRouter>
  );
};

export default hot(App);
