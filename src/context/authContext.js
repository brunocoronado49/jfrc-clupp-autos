import { useContext, createContext } from 'react'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) throw new Error("No hay auth provider")
  return context
}

export const AuthProvider = ({ children }) => {
  const user = {
    login: true
  }

  return (
    <authContext.Provider value={user}>
      {children}
    </authContext.Provider>
  )
}