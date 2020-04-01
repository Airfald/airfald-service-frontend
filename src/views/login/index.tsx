import React, { useState, useEffect } from 'react'
import { commonApi } from 'api';
import {
  RouteComponentProps
} from 'react-router-dom'
import { FormComponentProps } from 'antd/lib/form/Form'
import { Form, Input, Icon, Button, message } from 'antd';
import './index.scss';

interface IProps extends FormComponentProps, RouteComponentProps {
}

const LoginCompotent: React.FC<IProps> = props => {
  const {
    getFieldDecorator,
    getFieldsValue,
    setFieldsValue,
    resetFields
  } = props.form

  useEffect(() => {
  }, [])

  // ===========================================函数====================================================

  const handleSubmit = async () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        const { userName, password } = values;
        const response = commonApi.login({
          userName,
          password
        }).then((data) => {
          if (data) {
            // props.history.push({
            //   path: '/home'
            // })
          } else {
            // message.error(`登录失败 ${data.errMsg}`)
          }
        })
      }
    });
  }

  return (
    <div className='login'>
      <Form className="login__form">
        <Form.Item>
          {getFieldDecorator('userName')(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="UserName"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Button type="primary" className="login__form-button" onClick={handleSubmit}>
          登录
        </Button>
      </Form>
    </div>
  );
};

export default Form.create({ name: 'LoginCompotent' })(LoginCompotent)
