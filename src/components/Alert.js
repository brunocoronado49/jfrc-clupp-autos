import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const AlertPupUp = ({ message }) => {
  return (
    <div>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="warning">{message}</Alert>
      </Stack>
    </div>
  )
}

export default AlertPupUp