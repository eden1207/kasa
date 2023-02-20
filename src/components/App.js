/*import logo from './logo.svg';*/
import '../styles/App.css';
import {Routes, Route} from 'react-router-dom';
import { dataList } from '../datas/dataList';
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
        {dataList.map(({ id, title, cover, location, tags, host, rating }) =>
            <Route key={id} path={'/logement_' + id} element={<CardPage title={title} cover={cover} location={location} tags={tags} host={host} rating={rating} />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
