import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Layout />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);