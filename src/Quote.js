import React, { Component } from 'react';

class Quote extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p>{this.props.text}</p>
    )
  }
}