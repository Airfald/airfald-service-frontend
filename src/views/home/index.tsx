import React, { useState, useEffect } from 'react'
import { commonApi } from 'api';
import { connect } from 'react-redux';
import { Button, message } from 'antd';
import {
  setUserInfo
} from 'store/modules/home/action';
import './index.scss';

const HomeCompotent: React.FC<any> = props => {
  const { userInfo, setUserInfo } = props
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    getUserInfo();
    getUserList();
  }, [])

  // 用户信息
  const getUserInfo = async () => {
    try {
      const response: any = await commonApi.getUserInfo();
      setUserInfo({ userInfo: response.data })
    } catch (e) {
      message.error(e.message);
    }
  };

  // 用户信息
  const getUserList = async () => {
    try {
      const response: any = await commonApi.getUserList();
      if (response.code === 0) {

      } else {
        message.error(response.message)
      }
    } catch (e) {
      message.error(e.message);
    }
  };

  // 登出
  const logout = async () => {
    localStorage.clear()
    props.history.push('/login')
  };

  return (
    <div className='home'>
      <Button type="primary" onClick={logout}>logout</Button>
      姓名: { userInfo.userName }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.home.userInfo
  }
}

const mapDispatchToProps = dispatch => ({
  setUserInfo: (userInfo) => {
    dispatch(setUserInfo(userInfo))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeCompotent)

