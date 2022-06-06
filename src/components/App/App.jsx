import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Nav from '../Nav/Nav';
import HomePage from '../HomePage/HomePage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import ContactPage from '../ContactPage/ContactPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Home page */}
          <Route
            exact
            path="/home"
          >
            <HomePage />
          </Route>

          {/* Portfolio Page */}
          <Route
            exact
            path="/portfolio"
          >
            <PortfolioPage />
          </Route>

          {/* Contact Page */}
          <Route
            exact
            path="/contact"
          >
            <ContactPage />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1 className='container error-screen'>404</h1>
            <h1 className='container error-screen'>Page not found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
