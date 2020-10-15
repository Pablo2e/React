import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import LibrosProvider from './context/LibrosProvider'
import UsuarioProvider from './context/UsuarioProvider.js';

ReactDOM.render(
  <React.StrictMode>
    <LibrosProvider>
      <UsuarioProvider>
        <App />
      </UsuarioProvider>
    </LibrosProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

