import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Home() {

  const [roomID, setRoomID] = useState("");
  let roomId = "";

  const handleRoomInput = event => {
    setRoomID(event.target.value);
    roomId = event.target.value;
    console.log(roomID);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the jukeroom</p>
        <input
        type="text"
        id="roomInput"
        name="roomInput"
        onChange={handleRoomInput}
        value={roomID}
        />
        <Link to={`join/${roomID}`}>
          <button>Join Room</button>
        </Link>
        <Link to="/create">
          <button>Create Room</button>
        </Link>
      </header>
    </div>
  );
}
