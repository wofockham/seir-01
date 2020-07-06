import React, { Component } from 'react';
import axios from 'axios';

class FlickrSearch extends Component {
  fetchImages(q) {
    console.log('searching flickr for', q);
    const flickrURL = 'https://api.flickr.com/services/rest/';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: q,
      format: 'json',
      nojsoncallback: 1 // why? read the flickr docs if you're terribly bored.
    };

    axios(flickrURL, { params: flickrParams } ).then((results) => {
      console.log( results );
    });
  }

  render() {
    return (
      <div>
        <h1>Image Search</h1>
        <SearchForm onSubmit={ this.fetchImages } title="flickr search" help="call aleks for help" />
        <Gallery />
      </div>
    );
  }
}

// class components: if you have state (at least for now)
class SearchForm extends Component {
  constructor() {
    super();
    this.state = {query: ''};
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({query: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query); // we send our state to our parent's callback.
  }

  // attach the event handlers
  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="SQL" required onInput={ this._handleInput } />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

// functional components: for when you don't need state.
// Think of it as just the render() method.
// No `this`.
const Gallery = () => {
  return (
    <h2>Gallery coming soon</h2>
  );
};


export default FlickrSearch;
