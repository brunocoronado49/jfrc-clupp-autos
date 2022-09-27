import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) return <h2>Loading...</h2>
  if (!user) return <Navigate to="/login" />

  return <div>{children}</div>
}