import React from 'react';
import { common as cmallService } from 'api';
import { connect } from 'react-redux';
import { message } from 'antd';
import {
  setCurrentUser
} from 'store/modules/home/action';
import './index.scss';

const HomeCompotent: React.FC<any> = props => {
  const { homeList, onTabClick } = props
  console.log(homeList)
  // onTabClick()
  console.log(homeList)

  console.log('env test', process.env)
  // 批量获取小班信息
  const getSsClassByIds = async (classIds: string) => {
    try {
      const response = await cmallService.getSsClassByIds({
        classId: classIds
      });
      console.log(response);
    } catch (e) {
      message.error(e.message);
    }
  };

  let classId = "1000000729";
  getSsClassByIds(classId);

  return (
    <div className='home'>
      home
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

