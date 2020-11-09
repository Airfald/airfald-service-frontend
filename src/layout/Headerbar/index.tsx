import React from 'react'
import { connect } from 'react-redux';
import { Icon, Menu, Dropdown } from 'antd';
import {
  setCollapsed
} from 'store/modules/home/action';
import {
  RouteComponentProps,
  useHistory,
  withRouter
} from 'react-router-dom'
import { commonType } from 'api/types'
import Storage from 'utils/storage'
import './index.scss';

interface IHeadbarProps extends RouteComponentProps {
  userInfo: commonType.IUser,
  collapsed: Boolean,
  setCollapsed: (v: any) => void
}

const HeaderbarCompotent: React.FC<IHeadbarProps> = props => {
  const { userInfo, collapsed, setCollapsed } = props
  let history = useHistory();

  // 登出
  const logout = async () => {
    Storage.clear()
    history.push('/login')
  };

  const userMenu = (
    <Menu onClick={logout}>
      <Menu.Item>
        <a className="logout">退出登录</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="header-bar">
      <div className="header-bar__menu-fold" onClick={() => setCollapsed({ collapsed: !collapsed })}>
        <Icon type="menu-fold" style={{ fontSize: '20px', paddingLeft: '24px' }} />
      </div>
      <div className="person">
        <Dropdown overlay={userMenu} overlayStyle={{ top: '10px' }}>
          <div className="avatar">
            <div className="avatarImg" />
          </div>
        </Dropdown>
        <div className="info">
          <div className="name">{userInfo.userName}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    collapsed: state.home.collapsed,
    userInfo: state.home.userInfo,
  }
}

const mapDispatchToProps = dispatch => ({
  setCollapsed: (userInfo) => {
    dispatch(setCollapsed(userInfo))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HeaderbarCompotent))
