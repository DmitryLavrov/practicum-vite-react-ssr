import { RouteObject } from 'react-router-dom'
import { routesPath } from './routesPath'
import { Home } from '../../pages/home/ui'
import { Second } from '../../pages/second/ui'

export const routes: RouteObject[] = [
  {path: routesPath.home, element: <Home/>},
  {path: routesPath.second, element: <Second/>},

]
