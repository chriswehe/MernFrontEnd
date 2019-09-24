import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">{"Poke Cards"}</Link>
      </header>
    </div>
  );
}

export default App;
