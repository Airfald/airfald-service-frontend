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
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    let classId = "1000000729";
    getUserInfo(classId);
  }, [])

  useEffect(() => {
    console.log('onTabClick')
    onTabClick()
  }, [total])

  // 批量获取小班信息
  const getUserInfo = async (classIds: string) => {
    try {
      setTotal(10)
      const response = await commonApi.getUserInfo();
    } catch (e) {
      message.error(e.message);
    }
  };

  return (
    <div className='home'>
      home { total } 列表长度 { homeList.toString() }
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

