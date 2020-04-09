import React from 'react'
import { Button } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import './index.scss';

const FrameHomeCompotent: React.FC = props => {
  let history = useHistory();

  const pageList = [
    {
      name: '搜索列表',
      introduceImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586414038618&di=ad9fdecef547bbbe7f5e94fb4a3645bc&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F78%2F52%2F01200000123847134434529793168.jpg',
      path: '/frame/search-list'
    },
    {
      name: '二维码',
      introduceImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586414038618&di=ad9fdecef547bbbe7f5e94fb4a3645bc&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F78%2F52%2F01200000123847134434529793168.jpg',
      path: '/frame/qrcode'
    }
  ]

  return (
    <div className='frame-home'>
      {
        pageList.map((item, index) => (
          <Button key={index} className="frame-home_entry" onClick={() => history.push(item.path)}>
            {item.name}
          </Button>
        ))
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrameHomeCompotent)
