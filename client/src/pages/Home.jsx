import { useEffect, useState } from "react"
import axios from "axios"

const Home = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get("http://localhost:3000/games")
      setGames(response.data)
    }

    getGames()
  }, [])

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default Home
