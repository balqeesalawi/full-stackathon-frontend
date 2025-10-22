import Player from "./pages/Player"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Welcome from "./pages/Welcome"
import GameDetails from "./pages/GameDetails"
import PlayerForm from "./pages/PlayerForm"
import { useState } from "react"

const App = () => {
  const [player, setPlayer] = useState(null)

  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home player={player} />} />
          <Route
            path="/games/:gameId"
            element={<GameDetails player={player} setPlayer={setPlayer} />}
          />
          <Route
            path="/player-form"
            element={<PlayerForm player={player} setPlayer={setPlayer} />}
          />
          <Route
            path="/player/:player_id"
            element={<Player player={player} setPlayer={setPlayer} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
