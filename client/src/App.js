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
          <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
