import React, { Suspense, lazy } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const ItemListPage = lazy(() => import('../pages/ItemListPage'));
const ItemDetailPage = lazy(() => import('../pages/ItemDetailPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const Routes = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">List Item</Link>
        </li>
        <li>
          <Link to="/items/:id">Item</Link>
        </li>
        <li>
          <Link to="/404">Not Found</Link>
        </li>
      </ul>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
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
        <Route path="/404" component={props => <NotFoundPage {...props} />} />
      </Switch>
    </Suspense>
  </>
);

export default Routes;
