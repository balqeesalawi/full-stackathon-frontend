import Player from "./pages/Player"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Welcome from "./pages/Welcome"

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />

          <Route path="/player" element={<Player />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
