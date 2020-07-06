import React, { Component } from 'react';
import axios from 'axios';
import _ from 'underscore';

class FlickrSearch extends Component {
  constructor() {
    super();
    this.state = { images: [] };
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages(q) {
    const generateURL = function (p) {
      return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // Change 'q' to something else for different sizes (see docs)
      ].join('');
    };

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
      const images = _(results.data.photos.photo).map(generateURL);
      this.setState({images: images});
    });
  }

  render() {
    return (
      <div>
        <h1>Image Search</h1>
        <SearchForm onSubmit={ this.fetchImages } />
        <Gallery images={ this.state.images } />
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
const Gallery = (props) => {
  return (
    <div>
      { props.images.map( (url) => <img src={ url } alt="Copyright Flickr" key={ url } /> ) }
    </div>
  );
};


export default FlickrSearch;
