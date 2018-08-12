import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link}  from 'react-router-dom'
import HomePage from './pages/HomePageAssets/HomePage'
import RegistrationPage from './pages/RegistrationPage'
import ArticlePage from './pages/ArticlePageAssets/ArticlePage'

const MainRoute = ()=>{
  return <BrowserRouter>
    <Switch>
      <Route path ="/article/:id" component = {ArticlePage} />
      <Route path ="/register" component = {RegistrationPage} />
      <Route strict path="/" component = {HomePage} />
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
