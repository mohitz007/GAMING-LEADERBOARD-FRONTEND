import React, { useState } from 'react';
import { fetchUserRank } from '../api';

import './UserRank.css';


const UserRank = () => {
  const [userId, setUserId] = useState('');
  const [rankInfo, setRankInfo] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await fetchUserRank(userId);
      setRankInfo(res.data);
    } catch (err) {
      console.error('Error fetching rank:', err);
      setRankInfo(null);
    }
  };

  return (
    <div>
      <h2>Check User Rank</h2>
      <input
        type="number"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleSearch}>Check</button>
      {rankInfo && (
        <p>
          User #{rankInfo.user_id} is currently ranked <strong>{rankInfo.rank}</strong>
        </p>
      )}
    </div>
  );
};

export default UserRank;
