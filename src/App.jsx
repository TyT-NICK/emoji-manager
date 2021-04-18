import React, { useEffect, useState } from 'react';
import './App.css';
import useHttp from './Hooks/useHttp';

function App() {
  const [data, setData] = useState('');
  const { loading, request } = useHttp();

  // useEffect(() => {
  //   const fetching = async () => {
  //     const fetched = await request('https://api.github.com/emojis', 'GET');

  //     setData(JSON.stringify(fetched));
  //   };

  //   fetching();
  // }, []);

  return (
    <div className="App">
      {
        loading ? 'loading...' : data
      }
    </div>
  );
}

export default App;
