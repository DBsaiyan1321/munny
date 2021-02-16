import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from "./store/store";
import "./index.css";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
