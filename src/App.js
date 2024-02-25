// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  console.log('App Component Rendered');
  let [resourceType, setResourceType] = useState('HOME');

  useEffect(() => {
    console.log(resourceType);
  }, [resourceType]);

  const updateResType = (newState) => {
    return (event) => setResourceType(newState);
  };

  return (
    <div className="App">
      <button onClick={updateResType('HOME')}>HOME</button>
      <button onClick={updateResType('ABOUT')}>ABOUT</button>
      <button onClick={updateResType('CONTACT')}>CONTACT</button>
      <h3>{resourceType}</h3>
    </div>
  );
}

export default App;
