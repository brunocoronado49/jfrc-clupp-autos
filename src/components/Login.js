import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { useLoginHook } from '../hooks/useAuthHook'
import AlertPupUp from './Alert'
import '../styles/auth-style.css'

const Login = () => {
  const { error, onChange, onSubmit, onResetPassword } = useLoginHook()

  return (
    <div>
      {error && <div className="alert"><AlertPupUp message={error} /></div>}
      <center>
        <form onSubmit={onSubmit}>
          <p className="title-auth">Iniciar Sesión</p>
          <div>
            <TextField
              id="email"
              label="Correo"
              variant="outlined"
              name='email'
              type="email"
              onChange={onChange}
              className="input-auth"
            />
          </div>
          <div className="input-space">
            <TextField
              id="password"
              label="Contraseña"
              variant="outlined"
              name='password'
              type="password"
              onChange={onChange}
              className="input-auth"
            />
          </div>
          <a href="#!" onClick={onResetPassword} className="link">Olvidaste la contraseña?</a>
          <button className="btn-auth" type="submit">Iniciar Sesión</button>
          <p>
            No tienes una cuenta?
            <div className="link-login">
              <Link to="/register" className="link">
                Crear Cuenta
              </Link>
            </div>
          </p>
        </form>
      </center>

    </div>
  )
}

export default Login