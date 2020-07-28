import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'underscore';

const Home = (props) => {
  const _gotoRandomUser = () => {
    const students = ["AlexMaunder", "BlakeDavis28", "CaleShanley", "carol1020", "jnielsen85", "jmacmi11an", "Taerarch", "behdadset", "soojinhong91", "yonimar87", "shahwaiznq", "cesarsan8a", "gorff"];
    const username = _(students).sample();
    props.history.push(`/details/${ username }`);
  }

  return (
    <div>
      <h1>Github Search</h1>
      <Link to="/search">
        <button>Search for a user</button>
      </Link>
      <button onClick={ _gotoRandomUser }>Random user</button>
    </div>
  );
}

export default Home;

// "AlexMaunder", "BlakeDavis28", "CaleShanley", "carol1020", "jnielsen85", "jmacmi11an", "Taerarch", "behdadset", "soojinhong91", "yonimar87", "shahwaiznq", "cesarsan8a", "gorff"
