import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// redux store
import { store } from "./app/store"
import { Provider } from "react-redux"
// react-router
import {BrowserRouter as Router} from "react-router-dom" 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={store}>
          <Router>
                <App />
          </Router>
        </Provider>
  </React.StrictMode>
);

reportWebVitals();
