/*
 * @Author: ouhefu
 * @Date: 2020-04-08 10:16:41
 * @LastEditors: ouhefu
 * @LastEditTime: 2020-04-08 15:19:50
 * @Description:
 */
import userRoutes from './user'
import homeRoutes from './home'

const routeConfig = [
  ...userRoutes,
  ...homeRoutes,
]

export default routeConfig
