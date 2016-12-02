"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import CountButton from './CountButton.jsx';
import CountImage from './CountImage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }
  handleClick() {
    this.setState({number: this.state.number+1});
  }
  render() {
    return (
      <div>
        <div>Counter: {this.state.number}</div>
        <CountButton onClick={this.handleClick.bind(this)}></CountButton>
        <CountImage number={this.state.number}></CountImage>
        <CountButton onClick={this.handleClick.bind(this)}></CountButton>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
