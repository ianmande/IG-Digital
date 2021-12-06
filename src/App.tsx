// Vendors
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from '@mui/material'

// Components
import RoutesContainer from 'components/containers/RoutesContainer'

// Views
import { Profile } from 'views/Profile'
import { CreateAccount } from 'views/CreateAccount'
import { Login } from 'views/Login'
import { Home } from 'views/Home'
import { Search } from 'views/Search'

// Contants
import { allRoutes } from 'config/routes'
import { theme } from 'config/customTheme'

// Style
import 'assets/styles/styles.css'

// Store
import { browserReloadAuth } from 'reducers/authSlice'
import { browserReloadUsers } from 'reducers/userSlice'
import { browserReloadPosts } from 'reducers/postSlice'

// Context
import { ModalProvider } from 'context/ModalContext'

// Components
import { AppModal } from 'components/modal/Modal'

const views = {
  Home,
  Login,
  CreateAccount,
  Profile,
  Search,
}

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(browserReloadAuth())
    dispatch(browserReloadUsers())
    dispatch(browserReloadPosts())
  }, [dispatch])

  return (
    <>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <RoutesContainer listRoutes={allRoutes} views={views} />
          <AppModal />
        </ModalProvider>
      </ThemeProvider>
    </>
  )
}

export default App
