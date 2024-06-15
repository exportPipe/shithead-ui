import React, { useState } from 'react';
import { Container, Form, Button, Modal, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Lobby = ({ createGame, joinGame }) => {
  const [playerName, setPlayerName] = useState('');
  const [gameId, setGameId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleCreateGame = () => {
    if (playerName.trim()) {
      createGame(playerName);
    } else {
      setModalMessage('Please enter your name.');
      setShowModal(true);
    }
  };

  const handleJoinGame = () => {
    if (playerName.trim() && gameId.trim()) {
      joinGame(playerName, gameId);
    } else {
      setModalMessage('Please enter your name and game ID.');
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <h1 className="text-center mb-4">Welcome to Shithead</h1>
      <Card className="p-4 shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <Form>
          <Form.Group controlId="formPlayerName">
            <Form.Label>Player Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGameId" className="mt-4">
            <Form.Label>Game ID (to join an existing game)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter game ID"
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
            />
          </Form.Group>

          <div className="d-flex justify-content-between mt-5">
            <Button variant="primary" onClick={handleCreateGame}>
              Create Game
            </Button>
            <Button variant="secondary" onClick={handleJoinGame}>
              Join Game
            </Button>
          </div>
        </Form>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

Lobby.propTypes = {
  createGame: PropTypes.func.isRequired,
  joinGame: PropTypes.func.isRequired,
};

export default Lobby;
