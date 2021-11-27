// Vendors
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

const views = {
  Home,
  Login,
  CreateAccount,
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RoutesContainer listRoutes={allRoutes} views={views} />
      </ThemeProvider>
    </>
  )
}

export default App
