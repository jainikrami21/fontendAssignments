import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



const flname = "Jainik Rami";
let age = 24;
var Gradutation = "B.E in Computer Science";

// Using a Expression and javascript

ReactDOM.render(
  <div className='container py-5'>
  <h1>My name is {flname} , </h1>
  <h2>I am {age} and</h2>
  <h3> I am complete my Gradutation in {Gradutation}.</h3>
  <p> my Lucky Number is {5+2} , {Math.random()}</p>
  </div>,
  document.getElementById('root')
  );

