import logo from './logo.svg';
import './App.css';
import './Components/Header';
import './Components/Footer';
import './Components/NavBar';
import './Components/Form1';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Form1 from './Components/Form1';
import Footer from './Components/Footer';

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
      </header>
      <Header />
      <NavBar />
      <Form1 />
      <Footer />

    </div>
  );
}

export default App;
