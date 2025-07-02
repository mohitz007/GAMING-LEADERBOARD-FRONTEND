import React, { useEffect, useState } from 'react';
import { fetchTopPlayers } from '../api';
import './Leaderboard.css'

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);

  const getData = async () => {
    try {
      const res = await fetchTopPlayers();
      setPlayers(res.data);
    } catch (err) {
      console.error('Error fetching leaderboard:', err);
    }
  };

  useEffect(() => {
    getData();
    const interval = setInterval(getData, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Top 10 Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th><th>Username</th><th>Score</th><th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player.user_id}>
              <td>{index + 1}</td>
              <td>{player.username}</td>
              <td>{player.total_score}</td>
              <td>{player.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
