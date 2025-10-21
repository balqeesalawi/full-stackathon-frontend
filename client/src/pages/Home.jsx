

import PlayerForm from "./PlayerForm"
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'


const Home = () => {
  const [games, setGames] = useState([])
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get('http://localhost:3000/games')
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
    
      <Header />
    <PlayerForm players={players} setPlayers={setPlayers} />
      {games.map((game) => (
        <div>
          <h1>{game.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Home
