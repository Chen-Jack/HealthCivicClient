import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link}  from 'react-router-dom'
import HomePage from './pages/HomePageAssets/HomePage'
import RegistrationPage from './pages/RegistrationPage'

const MainRoute = ()=>{
  return <BrowserRouter>
    <Switch>
      <Route strict path="/" component = {HomePage} />
      <Route path ="/register" component = {RegistrationPage} />
    </Switch>
  </BrowserRouter>
}

class App extends Component {
  render() {
    return (
      <MainRoute/>
    );
  }
}

export default App;
