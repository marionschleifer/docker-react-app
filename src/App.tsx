import React from 'react';
import docker from './docker-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={docker} className="App-logo" alt="logo" />
        <h1>Docker is amazing!</h1>
        <a
          className="App-link"
          href="https://docs.docker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docker documentation
        </a>
      </header>
    </div>
  );
}

export default App;
