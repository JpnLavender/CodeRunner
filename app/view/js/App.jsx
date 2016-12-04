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
            <li><Link to="SignUp">SignUp</Link></li>
          </ul>
        </header>
        <main>
          {this.props.children}  
        </main>
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
      </div>
    );
  }
}

class SignUp extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>SignUp</h1>
        <UserFormBox></UserFormBox>
      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/Questions" component={Questions} />
      <Route path="/MyPage" component={MyPage} />
      <Route path="/SignUp" component={SignUp} />
    </Route>
  </Router>
), document.querySelector('#app'));
