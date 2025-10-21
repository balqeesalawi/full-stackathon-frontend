import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import PlayerForm from "./pages/PlayerForm"

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playerForm" element={<PlayerForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
