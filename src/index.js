import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));


const render = state => {
  root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App matrix={state.matrixData.start} values={state.valueData} errors={state.errors} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  );
}

store.subscribe(render)
render(store.getState())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
