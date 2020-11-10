/*
 * @Author: ouhefu
 * @Date: 2020-03-26 09:55:13
 * @LastEditors: ouhefu
 * @LastEditTime: 2020-04-13 13:57:27
 * @Description:
 */
import * as Types from './types'

const initialState = {
  collapsed: false,
  currentRoute:
  {
    "label": "首页",
    "path": "/user",
    "pathRoutes": [
      {
        "label": "首页",
        "path": "/user"
      }
    ]
  },
  userInfo: {}
}

export default (state = initialState, action = { type: '', payload: {} }) => {
  // console.log(action.type)
  switch(action.type) {
    case Types.SET_USER_INFO:
      return Object.assign({}, state, action.payload)
    case Types.SET_COLLAPSED:
      return Object.assign({}, state, action.payload)
    case Types.SET_CURRENT_ROUTE:
      return Object.assign({}, state, action.payload)
    default: return state
  }
}
