import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

const GameDetails = () => {
  const { gameId } = useParams()
  const [game, setGame] = useState(null)

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get('http://localhost:3000/games')
        const game = response.data.find((g) => g._id === gameId)

        setGame(game)
      } catch (err) {
        console.error(err)
      }
    }
    fetchGame()
  }, [gameId])
  if (!game) return <p>Loading</p>

  return (
    <div>
      <Header />
      <div className="game-content">
        <section className="image-container">
          <div>{game.img && <img src={game.img} alt={game.name} />}</div>
        </section>
        <section className="details">
          <div>
            <h3>{game.name}</h3>
            <p>Code: {game.code}</p>
            <p>Points: {game.points ?? 0}</p>
          </div>
        </section>
      </div>
    </div>
  )
}
export default GameDetails
