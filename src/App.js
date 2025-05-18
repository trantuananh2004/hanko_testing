import React from 'react';
import './App.css';
import { Hanko } from '@teamhanko/hanko-elements';

const hankoApi = 'https://a0c0c0c0-0000-0000-0000-000000000000.hanko.io';
const hanko = new Hanko(hankoApi);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <div className="login-container">
          <hanko-auth />
        </div>
      </header>
    </div>
  );
}

export default App;
