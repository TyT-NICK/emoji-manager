import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Button, Collection, Navbar, SideNav,
} from 'react-materialize';
import useHttp from './hooks/useHttp';
import './App.css';
import Navigation from './components/Navigation';
import useRoutes from './hooks/useRoutes';
import Page from './pages/PageAll';

function App() {
  const routes = useRoutes();

  return (
    <Router>
      {/* <Navbar />
      <Navigation /> */}
      <Page />
      <Switch>{routes}</Switch>
    </Router>
  );
}

export default App;
