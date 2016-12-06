import React, { Component } from 'react';
import { render } from 'react-dom';
import UserFormBox from '../../UserCreate.js.jsx';

export default class SignUp extends React.Component {
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
