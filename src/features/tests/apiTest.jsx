import React, { useState } from 'react';
import {
  createUser,
  createGame,
  joinGame,
  endGame,
  getGameStatus,
  getPlayedGame,
  getUsers,
} from '../../api/apiService';

const ApiTest = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gameId, setGameId] = useState('');
  const [userId, setUserId] = useState('');
  const [loserId, setLoserId] = useState('');
  const [gameStatus, setGameStatus] = useState(null);
  const [playedGame, setPlayedGame] = useState(null);
  const [users, setUsers] = useState([]);

  const handleCreateUser = async () => {
    try {
      const user = await createUser(username, email, password);
      setUserId(user.id);
      console.log('User created:', user);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleCreateGame = async () => {
    try {
      const game = await createGame();
      setGameId(game.game_id);
      console.log('Game created:', game);
    } catch (error) {
      console.error('Error creating game:', error);
    }
  };

  const handleJoinGame = async () => {
    try {
      const game = await joinGame(gameId, userId);
      console.log('Joined game:', game);
    } catch (error) {
      console.error('Error joining game:', error);
    }
  };

  const handleEndGame = async () => {
    try {
      const endedGame = await endGame(gameId, loserId);
      console.log('Game ended:', endedGame);
    } catch (error) {
      console.error('Error ending game:', error);
    }
  };

  const handleGetGameStatus = async () => {
    try {
      const status = await getGameStatus(gameId);
      setGameStatus(status);
      console.log('Game status:', status);
    } catch (error) {
      console.error('Error getting game status:', error);
    }
  };

  const handleGetPlayedGame = async () => {
    try {
      const game = await getPlayedGame(gameId);
      setPlayedGame(game);
      console.log('Played game:', game);
    } catch (error) {
      console.error('Error getting played game:', error);
    }
  };

  const handleGetUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
      console.log('Users:', users);
    } catch (error) {
      console.error('Error getting users:', error);
    }
  };

  return (
    <div>
      <h1>Shithead Game</h1>
      <div>
        <h2>Create User</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleCreateUser}>Create User</button>
      </div>

      <div>
        <h2>Create Game</h2>
        <button onClick={handleCreateGame}>Create Game</button>
      </div>

      <div>
        <h2>Join Game</h2>
        <input
          type="text"
          placeholder="Game ID"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
        />
        <button onClick={handleJoinGame}>Join Game</button>
      </div>

      <div>
        <h2>End Game</h2>
        <input
          type="text"
          placeholder="Loser ID"
          value={loserId}
          onChange={(e) => setLoserId(e.target.value)}
        />
        <button onClick={handleEndGame}>End Game</button>
      </div>

      <div>
        <h2>Get Game Status</h2>
        <button onClick={handleGetGameStatus}>Get Game Status</button>
        {gameStatus && <pre>{JSON.stringify(gameStatus, null, 2)}</pre>}
      </div>

      <div>
        <h2>Get Played Game</h2>
        <button onClick={handleGetPlayedGame}>Get Played Game</button>
        {playedGame && <pre>{JSON.stringify(playedGame, null, 2)}</pre>}
      </div>

      <div>
        <h2>Get Users</h2>
        <button onClick={handleGetUsers}>Get Users</button>
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username} - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ApiTest;
