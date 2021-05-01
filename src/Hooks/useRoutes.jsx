import React from 'react';
import { Route } from 'react-router-dom';
import PageAll from '../pages/PageAll';
import PageFav from '../pages/PageFav';
import PageDel from '../pages/PageDel';

const useRoutes = () => (
  <>
    <Route exact path="/">
      <PageAll />
    </Route>

    <Route path="/favorite">
      <PageFav />
    </Route>
    <Route path="/deleted">
      <PageDel />
    </Route>
  </>
);

export default useRoutes;
