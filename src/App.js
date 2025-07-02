import React from 'react';
import Leaderboard from './components/Leaderboard';
import UserRank from './components/UserRank';

function App() {
  return (
    <div className="App" >
      <h1>Gaming Leaderboard</h1>
      <UserRank />
      <hr />
      <Leaderboard />
    </div>
  );
}

export default App;
