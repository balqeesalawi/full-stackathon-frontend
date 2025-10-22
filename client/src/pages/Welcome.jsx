import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <div className="welcome-page">
      <div className="header">
        <h1>Welcome</h1>
      </div>
      <div className="start">
        <Link to="/player-form">Start</Link>
      </div>
    </div>
  )
}

export default Welcome
