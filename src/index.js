import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Papa = require('papaparse');
const fs = require('fs');
const testFilePath = '../test.csv';
const testFile = fs.readFileSync(testFilePath, "utf8");

const testRows = {};
Papa.parse(testFile, {
  header: true,
  skipEmptyLines: true,
  complete: function(results) {
    testRows.data = results.data;
    testRows.errors = results.errors;
    testRows.meta = results.meta;
  }
})

console.log(testRows.data);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
