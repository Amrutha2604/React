import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Employee from './Employee';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(<Employee name="Arun" empid={101}/>,document.);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
