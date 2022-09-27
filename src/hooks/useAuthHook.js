import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

/// Logica de registro de usuarios
export const useSignUpHook = () => {
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

/// Logica de inicio de sesión
export const useLoginHook = () => {
  const { login, resetPassword } = useAuth()
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
      await login(user.email, user.password)
      navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }

  const onResetPassword = async event => {
    event.preventDefault()

    if (!user.email) return setError("Ingresa un correo");
    try {
      await resetPassword(user.email)
      setError('Se ha mandado un correo, checa tu inbox')
    } catch (error) {
      setError(error.message)
    }
  }
  
  return { error, onChange, onSubmit, onResetPassword }
}

/// Logica para cerrar sesión
export const useLogoutHook = () => {
  const { logout, user } = useAuth()
  const navigate = useNavigate()

  const onLogoutSubmit = async event => {
    event.preventDefault()

    try {
      await logout()
      navigate("/login")
    } catch (error) {
      console.log(error.message)
    }
  }

  return {onLogoutSubmit, user}
}