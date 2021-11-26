// Vendors

// Components
import RoutesContainer from 'components/RoutesContainer'

// Views
import { CreateAccount } from 'views/CreateAccount'
import { Login } from 'views/Login'
import { Home } from 'views/Home'

// Contants
import { allRoutes } from 'config/routes'

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
      <RoutesContainer listRoutes={allRoutes} views={views} />
    </>
  )
}

export default App
