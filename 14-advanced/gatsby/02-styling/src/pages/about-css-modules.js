import React from "react";
import styles from './about-css-modules.module.css';
import Container from "../components/container";

const User = (props) => (
  <div className={ styles.user }>
    <img src={ props.avatar } className={ styles.avatar } />
    <div className={ styles.description }>
      <h2 className={ styles.username }>{ props.username }</h2>
      <p className={ styles.excerpt }>{ props.excerpt }</p>
    </div>
  </div>
);

export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS modules are "interesting".</p>
      <User
        username="Jane Doe"
        avatar="http://www.fillmurray.com/100/100"
        excerpt="Lorem ipsum etc about MLM"
      />
      <User
        username="John Doe"
        avatar="http://www.fillmurray.com/101/101"
        excerpt="Lorem ipsum etc about home improvement"
      />
    </Container>
  )
}
