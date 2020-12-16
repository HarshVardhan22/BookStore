import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import {ThemeProvider} from './components/themeContext'

ReactDOM.render(
  
  <React.StrictMode>
  <ThemeProvider>
    <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

