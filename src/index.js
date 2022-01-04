import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Layout from './components/Layout/Layout';

ReactDOM.render(
  <React.StrictMode>
    <browserRouter>
      <Layout />
    </browserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);