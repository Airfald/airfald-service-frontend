/*
 * @Author: ouhefu
 * @Date: 2020-03-26 09:55:13
 * @LastEditors: ouhefu
 * @LastEditTime: 2020-03-28 11:08:52
 * @Description:
 */
import * as Types from './types'

const initialState = {
  homeList: []
}

export default (state = initialState, action = { type: '' }) => {
  switch(action.type) {
    case Types.SET_HOME_INFO:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        admin: {},
        homeList: ['test']
      })
    default: return state
  }
}
