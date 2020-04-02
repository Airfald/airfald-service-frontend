/*
 * @Author: ouhefu
 * @Date: 2020-03-26 09:55:13
 * @LastEditors: ouhefu
 * @LastEditTime: 2020-03-28 11:08:52
 * @Description:
 */
import * as Types from './types'

export function setUserInfo(payload) {
  return {
    type: Types.SET_USER_INFO,
    payload
  }
}
