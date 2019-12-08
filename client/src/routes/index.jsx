import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

const ItemListPage = lazy(() => import('../pages/ItemListPage'));
const ItemDetailPage = lazy(() => import('../pages/ItemDetailPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const Routes = () => (
  // <Suspense fallback={<div>Loading...</div>}>
  <Suspense fallback={<LinearProgress />}>
    <Switch>
      <Route exact path="/" component={props => <ItemListPage {...props} />} />
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
);

export default Routes;
