import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import PlayerForm from "./PlayerForm"

const Home = () => {
  const [games, setGames] = useState([])
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get("http://localhost:3000/games")
      setGames(response.data)
    }

    getGames()
  }, [])

  const getPlayers = async () => {
    try {
      let response = await axios.get("http://localhost:3000/players")
      setPlayers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  getPlayers()

  return (
    <div>
      <PlayerForm players={players} setPlayers={setPlayers} />
    </div>
  )
}

export default Home
