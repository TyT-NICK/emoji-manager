import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation';
import useRoutes from './hooks/useRoutes';

function App() {
  const routes = useRoutes();

  return (
    <Router>
      <Switch>{routes}</Switch>
      <Navigation />
    </Router>
  );
}

export default App;
