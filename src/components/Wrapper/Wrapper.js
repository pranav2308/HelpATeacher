import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './Wrapper.css';

function Wrapper() {
  return (
    <div>
    
      <header className="wrapper-header">
        
        <Router>
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/login" component = {Login}/>
            <Route path = "/register" component = {Register}/>
          </Switch>
        </Router>
        
      </header>
    
    </div>
  );
}

export default Wrapper;
