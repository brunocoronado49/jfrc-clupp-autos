import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogoutHook } from '../hooks/useAuthHook'

const Feed = () => {
  const { onLogoutSubmit, user } = useLogoutHook()
  const [items, setItems] = useState([])

  return (
    <div>
      <Link to="/create" className="link">
        Añadir un vehículo
      </Link>
      {
        <p>{user.email}</p>
      }
      <button onClick={onLogoutSubmit}>Logout</button>
    </div>
  )
}

export default Feed