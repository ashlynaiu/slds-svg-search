import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import './styles/App.css';
import * as serviceWorker from './serviceWorker';

const Root = () => {
  return (
    <Router>
      <div>
        <Route exactly pattern="/" component={App} />
      </div>
    </Router>
  )
}

export default Root;

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();