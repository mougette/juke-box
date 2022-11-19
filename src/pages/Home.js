import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Home() {

  const [roomID, setRoomID] = useState("");

  const handleRoomInput = event => {
    setRoomID(event.target.value);
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
        placeholder="Enter Room Code"
        onChange={handleRoomInput}
        value={roomID}
        />
        <Link to={`join/${roomID}`}>
          <button disabled={roomID.length !== 4}>Join Room</button>
        </Link>
        <Link to="/create">
          <button>Create Room</button>
        </Link>
      </header>
    </div>
  );
}
