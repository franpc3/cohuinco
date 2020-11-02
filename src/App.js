import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MPReturn from './components/Rafting/MPReturn';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import axios from 'axios';
import './App.css';

function App() {
  axios.defaults.baseURL = 'http://localhost:5001'; /* https://us-central1-test-cohuinco.cloudfunctions.net/app/ */
  
  return (
    <Router>
      <Switch>
        <Route path="/admin">
            <Admin />
        </Route>
        <Route path="/rafting/:status">
          <MPReturn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;