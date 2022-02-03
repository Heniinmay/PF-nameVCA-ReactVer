import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);