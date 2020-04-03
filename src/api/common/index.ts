/*
 * @Author: ouhefu
 * @Date: 2020-03-17 11:20:37
 * @LastEditors: ouhefu
 * @LastEditTime: 2020-04-02 18:59:59
 * @Description:
 */
import request from '../../utils/request'
import * as types from './type'

/**
 * 登录
 * @param {any} param
 * @return {Promise<>}
 */
export async function login(params: types.IUser): any {
  return request.get<{ message, data, code }>('/login', {
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
