import React, { Component } from 'react';

// TODO:
// Create a <Time /> component that shows how many seconds ago the user loaded page.
// You loaded this page 19 seconds ago.

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: (new Date()).toString()
    };

    // arrow functions don't lose sight of `this`
    setInterval(() => {
      this.setState({time: (new Date()).toString()}) // this is undefined
    }, 1000);
  }

  render() {
    return (
      <h1>{ this.state.time }</h1>
    );
  }
}

export default Clock;
