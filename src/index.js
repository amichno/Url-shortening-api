import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/Wraper/Root';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);


