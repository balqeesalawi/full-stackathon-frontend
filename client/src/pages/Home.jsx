import { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'

const Home = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get('http://localhost:3000/games')
      setGames(response.data)
    }

    getGames()
  }, [])

  return (
    <div>
      <Header />
      {games.map((game) => (
        <div>
          <h1>{game.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Home
