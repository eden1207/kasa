/*import logo from './logo.svg';*/
import '../styles/App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import ErrorPage from './ErrorPage.js';
import CardPage from './CardPage.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apropos' element={<About />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/logement' element={<CardPage />} />
      </Routes>

    </div>
  );
}

export default App;
