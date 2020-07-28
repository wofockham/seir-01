import React, { useState } from 'react';

const Clickr = function () {
  console.log('rendering');
  const [clicks, setClicks] = useState(0); // 0 is the initial value

  return (
    <button onClick={ () => setClicks(clicks + 1) }>
      { clicks } clicks so far
    </button>
  );
};

export default Clickr;
