import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useLoginHook } from '../hooks/useAuthHook'
import Alert from './Alert'

const Login = () => {
  const { error, onChange, onSubmit, onResetPassword } = useLoginHook()

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
        <a href="#!" onClick={onResetPassword}>Olvidaste la contraseña?</a>
        <Button variant="contained" type='submit'>Inicia sesión</Button>
        <p>
          No tienes una cuenta?
          <Link to="/register">
            Registro
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login