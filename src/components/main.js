import React from 'react';
import{ Switch, Route } from 'react-router-dom';
import Landing from './landingpage';
import Champions from './champions';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing}/>
    <Route path="/champions" component={Champions }/>
  </Switch>
)


export default Main;
