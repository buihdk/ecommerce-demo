import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import ErrorBoundary from './ErrorBoundary';

const ItemListPage = lazy(() => import('../pages/ItemListPage'));
const ItemDetailPage = lazy(() => import('../pages/ItemDetailPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const Routes = () => (
  <ErrorBoundary
    fallback={
      <h2>Could not fetch items. Either reload or check API Server.</h2>
    }
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
        <Route path="*" component={props => <NotFoundPage {...props} />} />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default Routes;
