import React, { useEffect, useReducer } from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import Navigation from './components/navigation/Navigation';
import useRoutes from './hooks/useRoutes';
import ContentReducer, { getItems } from './content';
import ContentContext from './contexts/contentContext';

const storageName = 'items';

function App() {
  const [reducer, initialState] = ContentReducer();
  const [state, dispatch] = useReducer(reducer, initialState);

  const routes = useRoutes();

  useEffect(async () => {
    const items = await getItems();
    dispatch({ type: 'items/init', payload: items });
  }, []);

  useEffect(() => {
    if (state.length) {
      console.log('content state updated');
      localStorage.setItem(storageName, JSON.stringify(state));
    }
  }, [state]);

  return (
    <Router>
      <ContentContext.Provider value={{ content: state, dispatch }}>
        <Switch>{routes}</Switch>
      </ContentContext.Provider>

      <Navigation />
    </Router>
  );
}

export default App;
