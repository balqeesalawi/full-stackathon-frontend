import { Link } from "react-router-dom"

const Header = ({ player }) => {
  return (
    <header>
      <nav>
        <Link to="/home">Home</Link>
        {player ? <Link to={`/player/${player._id}`}>Player</Link> : null}
      </nav>
    </header>
  )
}

export default Header
