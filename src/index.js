import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Containers/Board/Board.container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
