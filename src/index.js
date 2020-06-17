import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';

import "jquery";
import "popper.js";
import "bootstrap";


import Layout from './layout';



ReactDOM.render(
    <React.StrictMode>
        <Layout />
    </React.StrictMode>,
    document.getElementById('root')
);



