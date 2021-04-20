import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Collection } from 'react-materialize';
import useHttp from './Hooks/useHttp';
import NavComponent from './components/NavComponent';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const { loading, request } = useHttp();

  return (
    <Router>
      <Collection>
        <NavComponent to="/asd" label="qeq" />
        <NavComponent to="/asasd" label="qeq" />
      </Collection>
      <ul className="collection">
        <a href="/" className="collection-item active">Alvin</a>
        <a href="/asd" className="collection-item">Alvin</a>
        <li className="collection-item">Alvin</li>
        <li className="collection-item">Alvin</li>
        <li className="collection-item">Alvin</li>
      </ul>
      {/* <div className="App">
      </div> */}
    </Router>
  );
}

export default App;
