import React from 'react';
import ReactDOM from 'react-dom/client';

const nm = "masoud";
const age = 19;
const height = 6;
const status = "student";

const root = ReactDOM.createRoot(document.getElementById("demo"));
root.render (
  <>
    <h1>Hello, my name is: {nm}</h1>
    <h1>My age is: {age}</h1>
    <h1>My height is: {height}</h1>
    <h1>My status is: {status}</h1>
  </>
);
