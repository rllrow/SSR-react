import React from 'react';
import {App} from "./App/App";
import { BrowserRouter as Router,Route, Switch, Redirect } from 'react-router-dom';
import Posts from "../Posts/Post";
import Navbar from "./Navbar/Navbar";

const MainRoutes = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/main' component={App}/>
        <Route path='/posts' >
          <Posts/>
        </Route>
        <Redirect to='/'/>
      </Switch>
    </Router>
  );
};

export default MainRoutes;