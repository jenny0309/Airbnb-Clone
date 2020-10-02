import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  // React Router
  // Router > Switch > Route
  // Always Header and Footer, but for Switch, it depends on the path

  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
