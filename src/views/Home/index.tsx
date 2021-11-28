// Vendors
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'

// Store
import { fetchAuthLogout } from 'reducers/authSlice'

export const Home: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <section>
      <h1>Home</h1>
      <Button onClick={() => dispatch(fetchAuthLogout())} variant="contained">
        Cerrar Sesión
      </Button>
    </section>
  )
}
