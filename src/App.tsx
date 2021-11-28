// Vendors
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from '@mui/material'

// Components
import RoutesContainer from 'components/containers/RoutesContainer'

// Views
import { CreateAccount } from 'views/CreateAccount'
import { Login } from 'views/Login'
import { Home } from 'views/Home'

// Contants
import { allRoutes } from 'config/routes'
import { theme } from 'config/customTheme'

// Style
import 'assets/styles/styles.css'

// Store
import { browserReloadAuth } from 'reducers/authSlice'
import { browserReloadUsers } from 'reducers/userSlice'

const views = {
  Home,
  Login,
  CreateAccount,
}

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(browserReloadAuth())
    dispatch(browserReloadUsers())
  }, [dispatch])

  return (
    <>
      <ThemeProvider theme={theme}>
        <RoutesContainer listRoutes={allRoutes} views={views} />
      </ThemeProvider>
    </>
  )
}

export default App
