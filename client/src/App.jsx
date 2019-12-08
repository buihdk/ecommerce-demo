import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Container } from '@material-ui/core';

import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Container fixed>
      <Routes />
    </Container>
  </BrowserRouter>
);

export default hot(App);
