import React from 'react';
import { common as cmallService } from 'api';
import { message } from 'antd';
import './index.scss';

const Home: React.FC<any> = props => {
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

export default Home;
