import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export const useAuthHook = () => {
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const [user, setUser] = useState({})
  const [error, setError] = useState("")

  const onChange = event => {
    const name = event.target.name
    const value = event.target.value
    setUser({ ...user, [name]: value })
  }

  const onSubmit = async event => {
    event.preventDefault()
    setError("")

    try {
      await signUp(user.email, user.password)
      navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }

  return { error, onChange, onSubmit }
}