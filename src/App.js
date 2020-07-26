import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shelf from './components/Shelf';

const App = () => {
  return (
    <div className="w-100">
      <Header />    
      <Shelf />  
    </div>
  );
}

export default App;
