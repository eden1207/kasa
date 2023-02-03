/*import logo from './logo.svg';*/
import '../styles/App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import ErrorPage from './ErrorPage.js';
import Cart from './Cart.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apropos' element={<About />} />
        <Route path='/erreur' element={<ErrorPage />} />
        <Route path='/logement' element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;