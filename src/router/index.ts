/*
 * @Author: ouhefu
 * @Date: 2020-04-08 10:16:41
 * @LastEditors: ouhefu
 * @LastEditTime: 2020-04-09 17:51:03
 * @Description:
 */

import userRoutes from './user'
import homeRoutes from './home'
import frameCompontentRoutes from './frame'
import toolsRoutes from './tools'

const routeConfig = [
  ...userRoutes,
  ...homeRoutes,
  ...frameCompontentRoutes,
  ...toolsRoutes
]

console.log('routeConfig', routeConfig)

export default routeConfig
