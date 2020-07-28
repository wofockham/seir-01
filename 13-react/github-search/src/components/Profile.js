import React, { Component } from 'react';
import Github from '../github';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      repos: null
    }
  }

  // React lifecycle methods
  componentDidMount() {
    console.log('componentDidMount()')
    const { username } = this.props.match.params;

    Github.getUserInfo(username).then(result => {
      this.setState({user: result.data});
    });

    Github.getUserRepos(username).then(result => {
      this.setState({repos: result.data});
    });
  }

  render() {
    return (
      <div>
        {this.props.match.params.username} profile coming soon
      </div>
    );
  }
}

export default Profile;
