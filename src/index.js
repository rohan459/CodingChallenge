// Import resources
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// Import custom css
import './carousel/_carousel.scss';
import './header/_header.scss';
import './container/_container.scss';
import './static/_static.scss';
import './image/_image.scss';
import './footer/_footer.scss';

// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Render main app
ReactDOM.render(<App/>, document.getElementById('app'));
