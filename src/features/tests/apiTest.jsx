import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap';
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
    <Container className="my-4">
      <h1 className="text-center mb-4">Shithead Game</h1>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Create User</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleCreateUser}>
                  Create User
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Create Game</Card.Title>
              <Button variant="success" onClick={handleCreateGame}>
                Create Game
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Join Game</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Game ID"
                    value={gameId}
                    onChange={(e) => setGameId(e.target.value)}
                  />
                </Form.Group>
                <Button variant="info" onClick={handleJoinGame}>
                  Join Game
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>End Game</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Loser ID"
                    value={loserId}
                    onChange={(e) => setLoserId(e.target.value)}
                  />
                </Form.Group>
                <Button variant="danger" onClick={handleEndGame}>
                  End Game
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Get Game Status</Card.Title>
              <Button variant="warning" onClick={handleGetGameStatus}>
                Get Game Status
              </Button>
              {gameStatus && <pre className="mt-3">{JSON.stringify(gameStatus, null, 2)}</pre>}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Get Played Game</Card.Title>
              <Button variant="secondary" onClick={handleGetPlayedGame}>
                Get Played Game
              </Button>
              {playedGame && <pre className="mt-3">{JSON.stringify(playedGame, null, 2)}</pre>}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Get Users</Card.Title>
              <Button variant="light" onClick={handleGetUsers}>
                Get Users
              </Button>
              {users.length > 0 && (
                <ListGroup className="mt-3">
                  {users.map((user) => (
                    <ListGroup.Item key={user.id}>
                      {user.username} - {user.email}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ApiTest;
