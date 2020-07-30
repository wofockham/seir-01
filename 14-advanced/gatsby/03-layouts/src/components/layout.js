import React from "react";
import { Link } from "gatsby";

const ListLink = (props) => (
  <li style={ {display: 'inline-block', marginRight: '1em'} }>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Layout({ children }) {
  return (
    <div style={ {margin: '3em auto', maxWidth: 650, padding: '0 1em' } }>
      <header>
        <Link to="/" style={ {textShadow: 'none', backgroundImage: 'none'} }>
          <h3 style={ {display: 'inline'} }>Fiat Lux</h3>
        </Link>
        <ul style={ {listStyle: 'none', float: 'right'} }>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about">About</ListLink>
          <ListLink to="/contact">Contact</ListLink>
        </ul>
      </header>
      { children }
    </div>
  );
}
