import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi primer web en react
        </p>
        <a
          className="App-link"
          href="http://signozodiacalcalculator.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My last web
        </a>
      </header>
      <main>
        <section>
          <h2>Hola mundo</h2>
          <p></p>
        </section>
      </main>
    </div>
  );
}

export default App;
