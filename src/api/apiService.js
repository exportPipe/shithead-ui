import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api'; // Stelle sicher, dass die URL korrekt ist

export const createUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const createGame = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/games`);
    return response.data;
  } catch (error) {
    console.error('Error creating game:', error);
    throw error;
  }
};

export const joinGame = async (gameId, userId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/games/${gameId}/join`, {
      user_id: userId,
    });
    return response.data;
  } catch (error) {
    console.error('Error joining game:', error);
    throw error;
  }
};

export const endGame = async (gameId, loserId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/games/${gameId}/end`, {
      loser_id: loserId,
    });
    return response.data;
  } catch (error) {
    console.error('Error ending game:', error);
    throw error;
  }
};

export const getGameStatus = async (gameId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/games/${gameId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting game status:', error);
    throw error;
  }
};

export const getPlayedGame = async (gameId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/played_games/${gameId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting played game:', error);
    throw error;
  }
};
