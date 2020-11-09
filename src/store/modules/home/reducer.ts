/*
 * @Author: ouhefu
 * @Date: 2020-03-26 09:55:13
 * @LastEditors: ouhefu
 * @LastEditTime: 2020-04-07 20:49:54
 * @Description:
 */
import * as Types from './types'

const initialState = {
  collapsed: false,
  userInfo: {}
}

export default (state = initialState, action = { type: '', payload: {} }) => {
  switch(action.type) {
    case Types.SET_USER_INFO:
      return Object.assign({}, state, action.payload)
    case Types.SET_COLLAPSED:
      return Object.assign({}, state, action.payload)
    default: return state
  }
}
