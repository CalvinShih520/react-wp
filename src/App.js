import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/layout/DefaultLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <DefaultLayout />
      </BrowserRouter>
    </React.StrictMode>
  );
}


export default App;