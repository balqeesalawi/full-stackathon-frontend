import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/Player">Player</Link>
      </nav>
    </header>
  )
}

export default Header
