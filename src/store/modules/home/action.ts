/*
 * @Author: ouhefu
 * @Date: 2020-03-26 09:55:13
 * @LastEditors: ouhefu
 * @LastEditTime: 2020-04-07 20:21:31
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
