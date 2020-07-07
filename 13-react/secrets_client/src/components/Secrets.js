import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json'; // Update this once deployed.
// const SERVER_URL = 'http://594f7a97c9bc.ngrok.io/secrets.json';

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: []
    };

    const fetchSecrets = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({secrets: results.data});
        setTimeout(fetchSecrets, 6000); // recursion
      });
    };

    fetchSecrets();

    this.saveSecret = this.saveSecret.bind(this);
  }

  saveSecret(content) {
    axios.post(SERVER_URL, {content: content}).then((result) => {
      // Add the new secret to the collection of secrets in state.
      this.setState({secrets: [...this.state.secrets, result.data]});
    });
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
