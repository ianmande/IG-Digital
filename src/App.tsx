// Vendors

// Components
import RoutesContainer from 'components/RoutesContainer'

// Views
import { Home } from 'views/Home'
import { Login } from 'views/Login'

// Contants
import { allRoutes } from 'config/routes'

const views = {
  Home,
  Login,
}

function App() {
  return (
    <>
      <RoutesContainer listRoutes={allRoutes} views={views} />
    </>
  )
}

export default App
