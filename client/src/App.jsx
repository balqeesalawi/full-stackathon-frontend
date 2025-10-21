import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
