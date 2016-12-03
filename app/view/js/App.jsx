"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import UserCreateForm from './UserCreate.js.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <UserFormBox></UserFormBox>
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('form')
);
