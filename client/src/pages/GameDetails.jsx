import { useEffect, useState } from "react"
import Header from "../components/Header"
import axios from "axios"
import { useParams } from "react-router-dom"

const GameDetails = ({ player, setPlayer }) => {
  const { gameId } = useParams()
  const initialState = {
    code: "",
  }

  const [formValue, setFormValue] = useState(initialState)
  const [game, setGame] = useState([])

  useEffect(() => {
    const getGame = async () => {
      const response = await axios.get(`http://localhost:3000/games/${gameId}`)
      setGame(response.data)
    }

    getGame()
  }, [])

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (formValue.code === game.code) {
      player.points += game.points
      console.log(player)

      await axios.put(`http://localhost:3000/player/${player._id}`, {
        points: player.points,
      })
      alert("correct")
    } else {
      setFormValue(initialState)
      alert("not correct")
    }
  }

  return (
    <>
      <Header player={player} />
      <div>
        <div className="game-page">
          <section className="image-container">
            <img src={game.img} alt={game.name} />
          </section>

          <section className="details">
            <h3>{game.name}</h3>
            <p>Game Points: {game.points} </p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="code">Code:</label>
              <input
                type="text"
                name="code"
                value={formValue.code}
                onChange={handleChange}
                required
              />
              <button type="submit">Add Points</button>
            </form>
          </section>
        </div>
      </div>
    </>
  )
}

export default GameDetails
