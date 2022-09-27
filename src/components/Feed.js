import { useLogoutHook } from '../hooks/useAuthHook'

const Feed = () => {
  const { onLogoutSubmit, user } = useLogoutHook()

  return (
    <div>
      {
        <p>{user.email}</p>
      }
      <button onClick={onLogoutSubmit}>Logout</button>
    </div>
  )
}

export default Feed