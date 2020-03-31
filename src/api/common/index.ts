import request from '../../utils/request'
import * as types from './type'

/**
 * 批量获取班课信息(分页)
 *
 * @param {any} param
 * @return {Promise<>}
 */
export async function getSsClassByIds(param: { classId: string }) {
  const params: any = {
    current: 1,
    size: 200,
    params: { ...param }
  };

  return request.post<any>('/enrollTwoTeacherClass/getClassList', params);
}
