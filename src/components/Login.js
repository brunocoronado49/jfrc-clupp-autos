import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { useLoginHook } from '../hooks/useAuthHook'
import AlertPupUp from './Alert'
import '../styles/auth-style.css'

const Login = () => {
  const { error, onChange, onSubmit, onResetPassword } = useLoginHook()

  return (
    <div>
      {error && <AlertPupUp message={error} />}
      <p className="title-auth">Iniciar Sesión</p>
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
        <button className="btn-auth" type="submit">Iniciar Sesión</button>
        <p>
          No tienes una cuenta?
          <Link to="/register">
            Crear Cuenta
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login