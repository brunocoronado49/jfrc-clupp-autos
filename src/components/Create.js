import { Link } from 'react-router-dom'
import { useCreateHook } from '../hooks/useCrudHook'
import TextField from '@mui/material/TextField'
import AlertPupUp from './Alert'
import '../styles/styles.css'

const Create = () => {
  return (
    <div>
      <form>
        <p className="title">Añadir un vehículo</p>
      </form>
    </div>
  )
}

export default Create