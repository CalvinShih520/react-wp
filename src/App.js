import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import About from './pages/AboutPage/About';
import Map from './pages/MapPage';
import Resbility from './pages/ResbilityPage';
import Interested from './pages/InterestedPage/Interested';
import Newscenter from './pages/NewscenterPage';
import Recruiting from './pages/RecruitingPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/react-wp' exact Component={HomePage} />
            <Route path='/react-wp/about' exact Component={About} />
            <Route path='/react-wp/map' exact Component={Map} />
            <Route path='/react-wp/resbility' exact Component={Resbility} />
            <Route path='/react-wp/interested' exact Component={Interested} />
            <Route path='/react-wp/newscenter' exact Component={Newscenter} />
            <Route path='/react-wp/recruiting' exact Component={Recruiting} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>

    
  );
}


export default App;