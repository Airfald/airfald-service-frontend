export interface IUser {
  id?: number
  userName?: string
  password?: string
  email?: string
  telphone?: string
  gender?: string
  status?: number // 1. 普通成员 2. 管理员
}
