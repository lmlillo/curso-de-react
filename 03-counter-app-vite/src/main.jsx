import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HelloWorldApp } from './HelloWorldApp';
// import { MyFirstApp } from './MyFirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* <MyFirstApp  /> */}
        <CounterApp value= { 10 } /> 
    </React.StrictMode>
);


