import React from 'react';
import { Route } from 'react-router-dom';

const useRoutes = () => (
  <>
    <Route exact path="/">Все</Route>
    <Route path="/favorite">Любимые</Route>
    <Route path="/deleted">Удаленные</Route>
  </>
);

export default useRoutes;
