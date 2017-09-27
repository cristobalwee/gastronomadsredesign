import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Loader from './components/loader.jsx';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Loader />, document.getElementById('root'));
registerServiceWorker();
