import { Link } from 'react-router-dom';
import { useParams, useLocation } from "react-router-dom"

export function Room() {

  const { id } = useParams();
  const location = useLocation();
  const name = location.state.name

  return (
    <div className="App">
      <header className="App-header">
        <h1>You are in room { id } </h1>
        <h1>Participants: { name } </h1>
        <Link to="/">
          <button>Back</button>
        </Link>
      </header>
    </div>
  );
}
