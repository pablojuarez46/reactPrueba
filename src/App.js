import logo from './logo.svg';
import './App.css';
import Welcoms from './componentes/Welcoms_old2';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-route-dom';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />    

          <Router>
            <div>
              <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Contact">Contacto</Link>
                </li>
              </ul>
            </div>
            <Routes>
               <Route path="/Contact" element={<Contact/>}/>
            </Routes>
          </Router>
    </header>
    </div>
  );
}

export default App;
