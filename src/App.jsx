import React, { useEffect, useReducer } from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import Navigation from './components/navigation/Navigation';
import useRoutes from './hooks/useRoutes';
import ContentReducer, { initializeItems, ACTION_TYPES } from './reducers/contentReducer';
import ContentContext from './contexts/contentContext';

const contentStorageName = 'STORED_ITEMS';

function App() {
  const [reducer, initialState] = ContentReducer();
  const [state, dispatch] = useReducer(reducer, initialState);

  const routes = useRoutes();

  useEffect(async () => {
    const items = await initializeItems(contentStorageName);
    dispatch({ type: ACTION_TYPES.INIT_ITEMS, payload: items });
  }, []);

  useEffect(() => {
    if (state.length) {
      console.log('content state updated');
      localStorage.setItem(contentStorageName, JSON.stringify(state));
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
