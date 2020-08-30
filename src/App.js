import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = 'http://localhost:3000';
  
  return (
    <Router>
      <Switch>
        <Route path="/admin">
            <Admin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
