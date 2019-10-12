import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Components/Dashboard";

import './App.css';

function App() {
  return (
    <Router>
  <nav>
    <h1>Welcome to the VIP Friends List!</h1>
    <p>You have reached a website that contains ONLY VIP friends that you must login to see!</p>
    <div className="links">
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  </nav>
  <Switch>
    {" "}
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <Route path="/login" component={Login} />
    {/* <Route component={Login} /> */}
  </Switch>
    </Router>
  );
}

export default App;
