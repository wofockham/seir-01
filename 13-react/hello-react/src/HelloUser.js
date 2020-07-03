import React, { Component } from 'react'; // destructuring: ES6

class HelloUser extends Component {
  render() {
    console.log( this ); // the current object

    return (
      <h2>Hello { this.props.name || 'Mystery User' }</h2>
    );
  }
}

export default HelloUser;
