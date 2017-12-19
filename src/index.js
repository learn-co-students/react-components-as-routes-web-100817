// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/about" render={() => <h1>About</h1>} />
        </div>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
