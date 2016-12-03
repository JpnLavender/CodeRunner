"use strict";

import React, { Component } from 'react';
import { render } from 'react-dom';
import { IndexRoute, Link, Router, Route, hashHistory } from 'react-router';

import UserFormBox from './UserCreate.js.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <header>
          <ul>
            <li><Link to="app">test</Link></li>
            <li><Link to="Questions">Questions</Link></li>
            <li><Link to="MyPage">MyPage</Link></li>
          </ul>
          Logged in as Jane
        </header>
        {this.props.children}  
      </div>
    );
  }
}
class Index extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <h1>Index</h1>
      </div>
    );
  }
}


class Questions extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <h1>Questions</h1>
      </div>
    );
  }
}

class MyPage extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <h1>Users</h1>
        // <UserFormBox></UserFormBox>
      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/app" component={App}>
      <IndexRoute component={Index} />
      <Route path="/Questions" component={Questions} />
      <Route path="/MyPage" component={MyPage} />
    </Route>
  </Router>
), document.querySelector('#app'));
