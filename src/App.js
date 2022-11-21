import { Button } from './Components';

import { APIView } from "./Views";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button appearance='primary' style={{ color: 'blue' }}>
          Test
        </Button>
        <Button appearance='secondary'>
          Test
        </Button>
      </header>
      <APIView />
    </div>
  );
}

export default App;
