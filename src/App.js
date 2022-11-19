import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { CreateRoom } from "./pages/CreateRoom"
import { JoinRoom } from "./pages/JoinRoom"
import { Room } from "./pages/Room"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateRoom />} />
      <Route path="/join/:id" element={<JoinRoom />} />
      <Route path="/room/:id" element={<Room />} />
    </Routes>
  );
}

export default App;
