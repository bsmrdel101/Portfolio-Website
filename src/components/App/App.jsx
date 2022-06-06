import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Nav from '../Nav/Nav';
import HomePage from '../HomePage/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/home"
          >
            <HomePage />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1 className='container'>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
