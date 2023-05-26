import React from 'react';
import { createRoot } from 'react-dom/client';
//import AppRouter from './components/AppRouter'; // Import the router component
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      {/*<AppRouter />*/}
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
