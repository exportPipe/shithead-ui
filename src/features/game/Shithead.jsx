import React from 'react';
import Lobby from './Lobby';
// Importiere andere Spielkomponenten wie `Game` hier

const Shithead = () => {
  const createGame = (playerName) => {
    // Logik zum Erstellen eines neuen Spiels
    console.log('Create game with player:', playerName);
  };

  const joinGame = (playerName, gameId) => {
    // Logik zum Beitreten zu einem bestehenden Spiel
    console.log('Join game with player:', playerName, 'and game ID:', gameId);
  };

  return (
    <div className="Shithead">
      <Lobby createGame={createGame} joinGame={joinGame} />
      {/* Weitere Komponente können hier hinzugefügt werden */}
    </div>
  );
};

export default Shithead;
