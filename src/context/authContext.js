import { useContext, createContext, useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../config/firebase'

const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) throw new Error("No hay auth provider")
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)

  /// Crear nuevo registro de usuario
  const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  /// Login con email y password
  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  /// Cambio de password via email
  const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  /// logout de la aplicación
  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({currentUser})
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe();
  }, [])

  return (
    <authContext.Provider value={{
      signUp,
      login,
      logout,
      resetPassword,
      user,
      loading
    }}>
      {children}
    </authContext.Provider>
  )
}
