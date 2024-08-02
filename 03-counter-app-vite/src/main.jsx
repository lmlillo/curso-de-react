import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HelloWorldApp } from './HelloWorldApp';
import { MyFirstApp } from './MyFirstApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        <MyFirstApp title="Luis Lillo" />
    </React.StrictMode>
);


