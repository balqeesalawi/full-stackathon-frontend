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
        <div key={game.id}>
          <h1>{game.name}</h1>
          <p>Code: {game.code}</p>
          <p>Points: {game.points ?? 0}</p>
          {game.img && <img src={game.img} alt={game.name} />}
        </div>
      ))}
    </div>
  )
}

export default Home
