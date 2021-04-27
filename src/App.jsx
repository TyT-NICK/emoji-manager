import React, { createContext } from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import Navigation from './components/navigation/Navigation';
import useRoutes from './hooks/useRoutes';

export const ContentContext = createContext();

function App() {
  const routes = useRoutes();

  return (
    <Router>
      <ContentContext.Provider>
        <Switch>{routes}</Switch>
      </ContentContext.Provider>
      <Navigation />
    </Router>
  );
}

export default App;
