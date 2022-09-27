import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { useSignUpHook } from '../hooks/useAuthHook'
import AlertPupUp from './Alert'
import '../styles/auth-style.css'

const Register = () => {
  const { error, onChange, onSubmit } = useSignUpHook()

  return (
    <div className="form-div">
      {error && <AlertPupUp message={error} />}
      <center>
        <form onSubmit={onSubmit} className="form-auth">
          <p className="title-auth">Crear Cuenta</p>
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
          <button className="btn-auth" type="submit">Crear Cuenta</button>
          <p>
            Ya tienes una cuenta?
            <div className="link-login">
              <Link to="/login" className="link">
                Iniciar Sesión
              </Link>
            </div>
          </p>
        </form>
      </center>
    </div>
  )
}

export default Register