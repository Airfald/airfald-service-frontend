export interface IUser {
  id?: number
  userName?: string
  password?: string
  email?: string
  telphone?: string
  gender?: string
  status?: number // 1. 普通成员 2. 管理员
}

export interface IFormData {
  // 类型 input, select...
  type: string
  // 字段名称
  filedName: string,
  // decorator 参数
  fieldDecoratorArgs?: object
  // {
  //   initialValue: activity.title,
  //   rules: [
  //     { required: true, message: '请输入活动主题' },
  //     {
  //       max: topicMaxLength,
  //       message: `字数不可超过 ${topicMaxLength}`
  //     }
  //   ]
  // }
  // 原组件的配置
  compontentConfig: any
}

export interface IFormConfig {
  compontentArgs: object
  options?: Array<any>
  optionArgs?: object
}

export interface IFormItem {
  filedName: string,
  fieldDecoratorArgs: object,
  compontentConfig: IFormConfig
}

