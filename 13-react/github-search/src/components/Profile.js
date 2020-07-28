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
        <h1>Profile for { this.props.match.params.username }</h1>
        <UserInfo user={ this.state.user } />
        <Repositories repos={ this.state.repos } />
      </div>
    );
  }
}


const UserInfo = (props) => {
  if (props.user === null) {
    return (<div>Loading...</div>);
  }

  const { login, followers, following, public_repos, public_gists } = props.user;
  return (
    <div>
      <h3>Stats for { login }</h3>
      <p>Followers: { followers }</p>
      <p>Following: { following }</p>
      <p>Repos: { public_repos }</p>
      <p>Gists: { public_gists }</p>
    </div>
  );
};

const Repositories = (props) => {
  if (props.repos === null) {
    return (<div>Loading...</div>);
  }

  const userRepos = props.repos.map((r) => (
    <li>
      <a href={ r.html_url } target="_blank">
        { r.name }
      </a>
    </li>
  ));

  return (
    <div>
      <h3>User Repositories</h3>
      <ul>
        { userRepos }
      </ul>
    </div>
  );
}

export default Profile;
