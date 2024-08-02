// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Form';
import Details from './Details';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/details" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
