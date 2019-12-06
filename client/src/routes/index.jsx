import React, { Suspense, lazy } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const ListItemPage = lazy(() => import('../pages/ListItemPage'));
const ItemPage = lazy(() => import('../pages/ItemPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const Routes = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">List Item</Link>
        </li>
        <li>
          <Link to="/item/:id">Item</Link>
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
          component={props => <ListItemPage {...props} />}
        />
        <Route path="/item/:id" component={props => <ItemPage {...props} />} />
        <Route path="/404" component={props => <NotFoundPage {...props} />} />
      </Switch>
    </Suspense>
  </>
);

export default Routes;
