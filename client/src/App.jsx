import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/playerForm" element={<playerForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
