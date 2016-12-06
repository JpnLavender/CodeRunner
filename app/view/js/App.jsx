"use strict";

import React, { Component } from 'react';
import { render } from 'react-dom';
import { IndexRoute, Link, Router, Route, hashHistory } from 'react-router';

import Index        from './controllers/home/Index.js.jsx'
import QuestionList from './controllers/questions/QuestionList.js.jsx'
import MyPage       from './controllers/users/MyPage.js.jsx'
import SignUp       from './controllers/authentications/SignUp.js.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <header>
          <ul>
            <li><Link to="/QuestionList">QuestionList</Link></li>
            <li><Link to="/MyPage">MyPage</Link></li>
            <li><Link to="/SignUp">SignUp</Link></li>
          </ul>
        </header>
        <main>
          {this.props.children}  
        </main>
      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/QuestionList" component={QuestionList} />
      <Route path="/MyPage"       component={MyPage} />
      <Route path="/SignUp"       component={SignUp} />
    </Route>
  </Router>
), document.querySelector('#app'));
