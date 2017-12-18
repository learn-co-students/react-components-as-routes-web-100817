import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
  </Router>),
  document.getElementById('root')
);
