import React, { Component } from 'react';

class Clickr extends Component {
  constructor() { // initialize()
    super();
    this.state = {
      clicks: 0
    };
  }

  // underscore prefix denotes that this is an event handler:
  _incrementCount() {
    this.setState({ clicks: this.state.clicks + 1 }); // avoid mutation: this.state.clicks++; // won't work
  }

  render() {
    console.log('render()');
    return (
      <button onClick={ this._incrementCount.bind(this) }>{ this.state.clicks } clicks so far</button>
    )
  }
}

export default Clickr;
