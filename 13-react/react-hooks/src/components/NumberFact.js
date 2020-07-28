import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NumberFact = () => {
  const [fact, setFact] = useState('');

  // useEffect hook is for asynchronous process
  useEffect(() => {
    axios.get('http://numbersapi.com/random/trivia?json').then((result) => {
      setFact(result.data.text); // update the state... AND rerender
    });
  }, []); // empty array means only run this function one time.

  return (
    <div>
      <h2>Number Trivia</h2>
      <p>
        { fact }
      </p>
    </div>
  )
};

export default NumberFact;
