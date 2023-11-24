import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Header from './App';
import {BrowserRouter} from 'react-router-dom';
// import 'antd/dist/antd.css';
import Footer from './Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


