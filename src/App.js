import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import Rotas from './rotas';

function App() {
  return (
    <>
      <div className="container">
        <NavBar />      
        <Rotas />  
      </div>  
    </>
  );
}

export default App;
