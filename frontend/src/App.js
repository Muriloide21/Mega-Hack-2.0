import React from 'react';
import Routes from './routes.js';
import ThemeProvider from './utils/ThemeContext'

import './global.css';

function App() {
  return (
    <ThemeProvider>
        <Routes />
    </ThemeProvider>
  );
}

export default App;
