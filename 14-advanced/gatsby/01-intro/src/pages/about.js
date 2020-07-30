import React from 'react';
import Header from '../components/header';

export default function About() {
  return (
    <div style={ {color: 'teal'} }>
      <Header headerText="About" />
      <Header headerText="A tradition of heritage" />
      <p>Gatsby is probably named after the novel The Great Gatsby</p>
      <p>Or possibly the movie.</p>
    </div>
  )
}
