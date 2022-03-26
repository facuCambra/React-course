import React from 'react';
import ReactDOM from 'react-dom';   //renderiza
import PrimeraApp from './PrimeraApp'; //copio y pego PrimeraApp borro la ultima letra y me fijo si me aparece el shortcut
import CounterApp from './CounterApp';
import './index.css'; 


const divRoot = document.querySelector('#root');  //id del div del index.html

ReactDOM.render(<CounterApp value={3} />,divRoot); //renderizo mi componente
