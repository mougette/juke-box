import { useParams } from "react-router-dom"

export function JoinRoom() {
  const { id } = useParams()
  return <h1>You have joined room { id } </h1>;
}
