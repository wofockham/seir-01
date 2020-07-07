import React, { Component } from 'react';

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      // seed data: TODO fetch this via AJAX
      secrets: [
        {id: 1, content: 'Secret one'},
        {id: 2, content: 'Secret two'},
        {id: 3, content: 'Secret three'},
        {id: 4, content: 'Secret four'}
      ]
    };
    this.saveSecret = this.saveSecret.bind(this);
  }

  saveSecret(content) {
    // create a new secret object with this content
    const secret = {
      id: Math.random(), // This will disappear when the server assigns actual IDs
      content: content
    };

    this.setState({secrets: [...this.state.secrets, secret]}); // no mutation!
  }

  render() {
    return (
      <div>
        <h1>Tell me all your secrets</h1>
        <SecretForm onSubmit={ this.saveSecret } />
        <Gallery secrets={ this.state.secrets  }/>
      </div>
    );
  }
}

class SecretForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({content: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({content: ''});
    // to restore focus: use refs
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea value={ this.state.content } onChange={ this._handleChange }/>
        <input type="submit" value="Tell" />
      </form>
    )
  }
}

const Gallery = (props) => {
  return (
    <div>
      { props.secrets.map( (s) => <p key={ s.id }>{ s.content }</p>) }
    </div>
  );
};


export default Secrets;
