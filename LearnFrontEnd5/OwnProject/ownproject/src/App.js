import './App.css';
import { useState } from 'react';
import Field from './Field';

function App() {
    //console.log('Field clicked!', e.clientX, e.clientY);
  
    const [players, setPlayers] = useState([]);

    const handleFieldClick = (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newPlayer = { x, y, type: 'O' };
      setPlayers([...players, newPlayer]);
    };

  return (
    <Field onClick={handleFieldClick}>
      {players.map((player, index) => (
        <div
          key={index}
          className="player"
          style={{ left: player.x, top: player.y }}
          >
            {player.type}
          </div>
      ))}
    </Field>
  );
}

export default App;
