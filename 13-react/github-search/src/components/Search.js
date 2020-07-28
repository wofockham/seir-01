import React, { useState } from 'react';

export default (props) => {
  const [username, setUsername] = useState(''); // array destructuring.

  const _handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/details/${ username }`)
  };

  return (
    <div>
      <h2>Search Github by username</h2>
      <form onSubmit={ _handleSubmit }>
        <label>
          Search:
          <input type="search" onInput={ (e) => setUsername(e.target.value) } />
        </label>
        <button>Search for { username || 'user' }</button>
      </form>
    </div>
  );
};

// import React, { Component } from 'react';
//
// class Search extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: ''
//     };
//     this._handleInput = this._handleInput.bind(this);
//     this._handleSubmit = this._handleSubmit.bind(this);
//   }
//
//   _handleInput(e) {
//     this.setState({username: e.target.value})
//   }
//
//   _handleSubmit(e) {
//     e.preventDefault();
//     this.props.history.push(`/details/${ this.state.username }`);
//   }
//
//   render() {
//     return (
//       <div>
//         <h2>Search Github by username</h2>
//         <form onSubmit={ this._handleSubmit }>
//           <label>
//             Search:
//             <input
//               type="search" onInput={ this._handleInput }/>
//           </label>
//           <button>Search for user</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Search;
