import userRoutes from './user'
import homeRoutes from './home'
import loginRoutes from './login'

const routeConfig = [
  ...userRoutes,
  ...homeRoutes,
  ...loginRoutes,
]

export default routeConfig
