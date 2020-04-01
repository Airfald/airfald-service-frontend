import React, { useState, useEffect } from 'react'
import { commonApi } from 'api';
import { connect } from 'react-redux';
import { message } from 'antd';
import {
  setCurrentUser
} from 'store/modules/home/action';
import './index.scss';

const HomeCompotent: React.FC<any> = props => {
  const { homeList, onTabClick } = props

  useEffect(() => {
    getUserInfo();
  }, [])

  /**
   * @description: 获取用户信息
   * @param
   * @return:
   */
  const getUserInfo = async () => {
    try {
      const response = await commonApi.getUserInfo();
    } catch (e) {
      message.error(e.message);
    }
  };

  return (
    <div className='home'>
      home { } 列表长度 { homeList.toString() }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    homeList: state.home.homeList
  }
}

const mapDispatchToProps = dispatch => ({
  onTabClick: () => {
    dispatch(setCurrentUser({}))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeCompotent)

