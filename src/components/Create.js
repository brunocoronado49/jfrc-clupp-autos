import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useCreateHook } from '../hooks/useCrudHook'
import NoPhoto from '../assets/no-photo.png'
import TextField from '@mui/material/TextField'
import AlertPupUp from './Alert'
import '../styles/styles.css'

const Create = () => {
  const { image, error, onChange, onChangeImage, onSubmit } = useCreateHook()

  return (
    <div>
      {error && <div className="alert"><AlertPupUp message={error} /></div>}
      <form onSubmit={onSubmit}>
        <p className="title">Añadir un vehículo</p>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <div class="add-image-div">
                <input type="file" onChange={onChangeImage} />
                <img src={!image ? NoPhoto : image} alt="add" className="add-image" />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>
                <TextField
                  id="brand"
                  label="Marca"
                  variant="outlined"
                  name='brand'
                  type="brand"
                  className="input"
                  onChange={onChange}
                />
              </div>
              <div className="input-bottom">
                <TextField
                  id="model"
                  label="Modelo"
                  variant="outlined"
                  name='model'
                  type="model"
                  className="input"
                  onChange={onChange}
                />
              </div>
              <div className="input-bottom">
                <TextField
                  id="year"
                  label="Año"
                  variant="outlined"
                  name='year'
                  type="year"
                  className="input"
                  onChange={onChange}
                />
              </div>
              <div className="btn-add-div">
                <button className="btn-add" type="submit">Añadir vehículo</button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </form>
      <div className="to-feed">
        <Link to="/" className="link">
          Ver vehículos
        </Link>
      </div>
    </div>
  )
}

export default Create