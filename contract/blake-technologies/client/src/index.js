import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import Functionality from './context/Functionality.js'
import Text from './context/Text.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Text>
        <Functionality>
          <App />
        </Functionality>
      </Text>
    </BrowserRouter>
  </React.StrictMode>
);
