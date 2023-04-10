import logo from './logo.svg';
import './App.css';
import Welcoms from './componentes/Welcoms_old2';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-route-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />    
      <Welcoms message="barando" name="Pablo"/>
    </header>
    </div>
  );
}

export default App;
