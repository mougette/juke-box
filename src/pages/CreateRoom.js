import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function CreateRoom() {

  const Letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M",
                  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const [roomID, setRoomID] = useState(generateRandomRoom);
  const [name, setName] = useState("");
  let navigate = useNavigate();

  function generateRandomRoom() {
    let room = ""
    for (let i = 0; i < 4; i++) {
      room += convIntToChar(getRandomInt(0, 26));
    }
    return room
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function convIntToChar(num) {
    return Letters[num];
  }

  const handleNameInput = event => {
    setName(event.target.value);
    console.log(roomID);
  };

  function handleClick() {
    navigate(`/room/${roomID}`, { state: { name: name } })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Room</h1>
        <h2>You are creating room: { roomID }</h2>
        <input
        type="text"
        id="nameInput"
        name="nameInput"
        placeholder="Enter Name"
        onChange={handleNameInput}
        value={name}
        />
        <button onClick={handleClick} disabled={name.length < 1}>Enter the jukeroom</button>
        <Link to="/">
          <button>Back</button>
        </Link>
      </header>
    </div>
  );

}
