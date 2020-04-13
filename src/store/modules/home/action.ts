/*
 * @Author: ouhefu
 * @Date: 2020-03-26 09:55:13
 * @LastEditors: ouhefu
 * @LastEditTime: 2020-04-13 12:35:11
 * @Description:
 */
import * as Types from './types'

export function setUserInfo(payload) {
  return {
    type: Types.SET_USER_INFO,
    payload
  }
}

export function setCollapsed(payload) {
  return {
    type: Types.SET_COLLAPSED,
    payload
  }
}

export function setCurrentRoute(payload) {
  return {
    type: Types.SET_CURRENT_ROUTE,
    payload
  }
}
