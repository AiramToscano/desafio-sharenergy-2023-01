import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppProvide } from './Context/Context';
import App from './pages/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvide>
        <App />
      </AppProvide>
    </BrowserRouter>
  </React.StrictMode>,
);
