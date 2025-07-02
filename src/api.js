import axios from 'axios';

const API_BASE = "http://localhost:8000/api/leaderboard";

export const fetchTopPlayers = () => axios.get(`${API_BASE}/top`);
export const fetchUserRank = (userId) => axios.get(`${API_BASE}/rank/${userId}`);
