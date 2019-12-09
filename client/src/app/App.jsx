import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Container, CircularProgress } from '@material-ui/core';

import { fetchCategories } from '../services/localStorage';
import ErrorBoundary from '../utils/ErrorBoundary';
import ErrorBar from '../utils/ErrorBar';
import Routes from '../routes';

const App = () => {
  fetchCategories();

  return (
    <BrowserRouter>
      <ErrorBoundary
        fallback={
          <ErrorBar msg="App has crashed. Check console for more info." />
        }
      >
        <Suspense fallback={<CircularProgress />}>
          <Container fixed>
            <Routes />
          </Container>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default hot(App);
