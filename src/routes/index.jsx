import React, { memo, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const ItemListPage = lazy(() => import('pages/ItemListPage'));
const ItemDetailPage = lazy(() => import('pages/ItemDetailPage'));
const NotFoundPage = lazy(() => import('utils/NotFoundPage'));

const Routes = () => (
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
    <Route
      path="*"
      component={props => <NotFoundPage errorCode={404} {...props} />}
    />
  </Switch>
);

export default memo(Routes);
