"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { FormControl } from 'react-bootstrap';

export default class UserFormBox extends React.Component {
  handleUserDataSubmit(user) {
    var serverHost = window.location.origin + "/api/v1/users";
    $.ajax({
      url: serverHost,
      dataType: 'json',
      type: 'POST',
      data: user,
      success: function(data) {
        this.setState({data: this.state.data.concat([data])});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(serverHost, status, err.toString());
      }.bind(this)
    });
  }
  render(){
    return(
      <div className="userFormBox">
        <UserCreateForm onUserSubmit={this.handleUserDataSubmit}/>
      </div>
    );
  }
};

export class UserCreateForm extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit(e) {
    e.preventDefault();
    var name                  = ReactDOM.findDOMNode(this.refs.name).value.trim();
    var my_github_url         = ReactDOM.findDOMNode(this.refs.my_github_url).value.trim();
    var default_lang          = ReactDOM.findDOMNode(this.refs.default_lang).value.trim();
    var mail                  = ReactDOM.findDOMNode(this.refs.mail).value.trim();
    var password              = ReactDOM.findDOMNode(this.refs.password).value.trim();
    var password_confirmation = ReactDOM.findDOMNode(this.refs.password_confirmation).value.trim();

    if (!name || !my_github_url || !default_lang || !mail || !password || !password_confirmation) {
      return;
    }

    this.props.onUserSubmit({
      name:                  name,
      my_github_url:         my_github_url,
      default_lang:          default_lang,
      mail:                  mail,
      password:              password,
      password_confirmation: password_confirmation
    })

    ReactDOM.findDOMNode(this.refs.name).value                  = '';
    ReactDOM.findDOMNode(this.refs.my_github_url).value         = '';
    ReactDOM.findDOMNode(this.refs.default_lang).value          = '';
    ReactDOM.findDOMNode(this.refs.mail).value                  = '';
    ReactDOM.findDOMNode(this.refs.password).value              = '';
    ReactDOM.findDOMNode(this.refs.password_confirmation).value = '';
    return;
  }

  render() {
    return(
      <form className="userCreateForm" onSubmit={this.handleSubmit}>
        <ul>
          <li><FormControl type="text"     label="UserName"        placeholder="UserName"        ref="name" /></li>
          <li><FormControl type="url"      label="GitHubAccount"   placeholder="GitHubAccount"   ref="my_github_url" /></li>
          <li><FormControl type="text"     label="DefaultLanguage" placeholder="DefaultLanguage" ref="default_lang" /></li>
          <li><FormControl type="email"    label="Mail"            placeholder="Mail"            ref="mail" /></li>
          <li><FormControl type="password" label="PassWord"        placeholder="PassWord"        ref="password" /></li>
          <li><FormControl type="password" label="Re:PassWord"     placeholder="PassWord"        ref="password_confirmation" /></li>
          <li><FormControl type="submit"   value="CreateNewUser" /></li>
        </ul>
      </form>
    )
  }
};
