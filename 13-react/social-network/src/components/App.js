import React from 'react';
import Profile from './Profile';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <Clock />
      <Profile name="Groucho Marx" age="101" motto="No gods no masters" pic="http://via.placeholder.com/400" />
      <Profile name="Harpo Marx" age="98" motto="" pic="http://via.placeholder.com/401" />
      <Profile name="Chico Marx" age="99" motto="No gods no masters" pic="http://via.placeholder.com/402" />
    </div>
  );
}

export default App;
