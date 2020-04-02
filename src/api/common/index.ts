import request from '../../utils/request'
import * as types from './type'

/**
 * 登录
 * @param {any} param
 * @return {Promise<>}
 */
export async function login(params: types.IUser) {
  return request.get('/login', {
    params
  });
}

/**
 * 登出
 * @param {any} param
 * @return {Promise<>}
 */
export async function getUserList() {
  return request.get('/getUserList');
}


/**
 * 获取用户信息
 * @param {any} param
 * @return {Promise<>}
 */
export async function getUserInfo() {
  return request.get('/getUserInfo');
}
