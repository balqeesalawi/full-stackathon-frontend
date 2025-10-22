import { useEffect, useState } from "react"
import Header from "../components/Header"
import axios from "axios"
import { Link } from "react-router-dom"

const Home = ({ player }) => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get("http://localhost:3000/games")
      setGames(response.data)
    }

    getGames()
  }, [])

  return (
    <>
      <Header player={player} />
      <div className="home-page">
        {games.map((game) => (
          <Link to={`/games/${game._id}`}>
            <div key={game.id} className="game-card">
              <h1>{game.name}</h1>
              <div className="home-img-container">
                {game.img && <img src={game.img} alt={game.name} />}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Home
