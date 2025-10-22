import axios from "axios"
import { useState } from "react"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"

const PlayerForm = ({ player, setPlayer }) => {
  let navigate = useNavigate()

  const initialState = {
    name: "",
    phone: "",
    points: 0,
  }

  const [formValue, setFormValue] = useState(initialState)

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post("http://localhost:3000/player", formValue)
    setPlayer(response.data)
    setFormValue(initialState)
    navigate(`/player/${response.data._id}`)
  }
  return (
    <>
      <Header player={player} />
      <div className="form-page">
        <h2>Enter Your Information</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            value={formValue.name}
            onChange={handleChange}
            placeholder="Your name"
          />

          <label htmlFor="phone"></label>
          <input
            type="text"
            name="phone"
            value={formValue.phone}
            onChange={handleChange}
            placeholder="Your phone number"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default PlayerForm
