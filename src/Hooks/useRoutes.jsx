import React from 'react';
import { Route } from 'react-router-dom';
import PageAll from '../pages/PageAll';

const useRoutes = () => (
  <>
    <Route exact path="/">
      <PageAll />
    </Route>

    {/* <Route path="/favorite">
      <Page title="Любимые">
        л
      </Page>

    </Route>
    <Route path="/deleted">
      <Page title="Удаленные">
        у
      </Page>

    </Route> */}
  </>
);

export default useRoutes;
