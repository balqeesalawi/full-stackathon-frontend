import axios from "axios"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"

const Player = ({ player, setPlayer }) => {
  let navigate = useNavigate()

  const handleReset = async () => {
    await axios.delete(`http://localhost:3000/player/${player._id}`)
    setPlayer(null)
    navigate("/")
  }

  return player ? (
    <div className="player-page">
      {
        <div>
          <Header player={player} />
          <div className="player-info">
            <h2>Player Information</h2>
            <p>Name: {player.name}</p>
            <p>Phone: {player.phone}</p>
            <p>Points: {player.points}</p>
            <button onClick={handleReset}>Leave</button>
          </div>
        </div>
      }
    </div>
  ) : null
}

export default Player
