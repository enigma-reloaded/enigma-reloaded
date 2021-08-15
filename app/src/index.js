import './index.css';
import './tailwind.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './app';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

serviceWorkerRegistration.register();

reportWebVitals();
