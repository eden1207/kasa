/*import logo from './logo.svg';*/
import '../../styles/App.css';
import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home.js';
import About from '../About/About.js';
import ErrorPage from '../ErrorPage/ErrorPage.js';
import CardPage from '../CardPage/CardPage.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apropos' element={<About />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path={'/logements/:id'} element={<CardPage />} errorElement={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
