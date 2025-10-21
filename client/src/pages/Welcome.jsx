import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/Player">Player</Link>
    </div>
  )
}

export default Welcome
