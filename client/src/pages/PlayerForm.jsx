import axios from "axios"
import { useState } from "react"
import Header from "../components/Header"

const PlayerForm = ({ players, setPlayers }) => {
  const initialState = {
    name: "",
    phone: "",
  }

  const [formValue, setFormValue] = useState(initialState)

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post("http://localhost:3000/player", formValue)
    console.log(response.data)
    setFormValue(initialState)
  }
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formValue.name}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          name="phone"
          value={formValue.phone}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PlayerForm
