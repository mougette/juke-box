import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"

export function JoinRoom() {
  const { id } = useParams()
  return (
    <div className="App">
      <header className="App-header">
        <h1>You will join room { id } </h1>
        <Link to="/">
          <button>Back</button>
        </Link>
      </header>
    </div>
  );
}
