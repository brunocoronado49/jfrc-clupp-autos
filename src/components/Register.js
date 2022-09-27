import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useAuthHook } from '../hooks/useAuthHook'
import Alert from './Alert'

const Register = () => {
  const { error, onChange, onSubmit } = useAuthHook()

  return (
    <div>
      {error && <Alert message={error} />}
      <form onSubmit={onSubmit}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          name='email'
          type="email"
          onChange={onChange}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          name='password'
          type="password"
          onChange={onChange}
        />
        <Button variant="contained" type='submit'>Registrate</Button>
        <p>
          Already have an Account?
          <Link to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register