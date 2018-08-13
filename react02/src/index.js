import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Website from './Website/WebsiteContainer'
import './index.css'

ReactDOM.render(<Website />, document.getElementById('root'));
registerServiceWorker();
