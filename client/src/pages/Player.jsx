import { useEffect, useState } from "react"
import axios from "axios"
import PlayerForm from "./PlayerForm"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"

const Player = () => {
  let navigate = useNavigate()

  const [player, setPlayer] = useState(() => {
    const savedPlayer = localStorage.getItem("player")
    return savedPlayer ? JSON.parse(savedPlayer) : null
  })

  // Save to localStorage whenever player changes
  useEffect(() => {
    if (player) {
      localStorage.setItem("player", JSON.stringify(player))
    }
  }, [player])

  const handleReset = () => {
    setPlayer(null)
    localStorage.removeItem("player")
    navigate("/")
  }

  return (
    <div>
      {player ? (
        <div className="mt-4">
          <Header />
          <h2>Player Created:</h2>
          <p>Name: {player.name}</p>
          <p>Phone: {player.phone}</p>
          <p>Points: {player.points}</p>
          <button onClick={handleReset}>Leave</button>
        </div>
      ) : (
        <PlayerForm setPlayer={setPlayer} />
      )}
    </div>
  )
}

export default Player
