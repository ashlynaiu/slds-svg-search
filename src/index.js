import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import NotFound from './components/NotFound';
import './styles/App.css';
import * as serviceWorker from './serviceWorker';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route pattern="/" exact component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Root;

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();