import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import ErrorBoundary from '../utils/ErrorBoundary';
import ErrorBar from '../utils/ErrorBar';

const ItemListPage = lazy(() => import('../pages/ItemListPage'));
const ItemDetailPage = lazy(() => import('../pages/ItemDetailPage'));
const NotFoundPage = lazy(() => import('../utils/NotFoundPage'));

const Routes = () => (
  <ErrorBoundary
    fallback={<ErrorBar msg="App has crashed. Check console for more info." />}
  >
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        <Route
          exact
          path="/"
          component={props => <ItemListPage {...props} />}
        />
        <Route
          exact
          path="/items/:id"
          component={props => <ItemDetailPage {...props} />}
        />
        <Route exact path="/items">
          <Redirect to="/" />
        </Route>
        <Route
          path="*"
          component={props => <NotFoundPage errorCode={404} {...props} />}
        />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default Routes;
