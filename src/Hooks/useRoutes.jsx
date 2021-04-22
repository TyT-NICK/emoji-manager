import React from 'react';
import { Route } from 'react-router-dom';
import Page from '../pages/Page';

const useRoutes = () => (
  <>
    <Route exact path="/">
      <Page title="Все">
        в
      </Page>
    </Route>

    <Route path="/favorite">
      <Page title="Любимые">
        л
      </Page>

    </Route>
    <Route path="/deleted">
      <Page title="Удаленные">
        у
      </Page>

    </Route>
  </>
);

export default useRoutes;
