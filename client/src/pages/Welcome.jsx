import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="./PlayerForm">Player</Link>
    </div>
  )
}

export default Welcome
