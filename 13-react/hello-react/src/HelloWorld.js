import React from 'react';

// Class Component
class HelloWorld extends React.Component {
  // Every react class component must have a method called render()
  render() {
    // render() must return a string of unquoted XHTML (through the magic of JSX)
    return (
      <h1>Hello World</h1>
    );
  }
}

export default HelloWorld;
