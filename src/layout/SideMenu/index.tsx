import React from 'react'
import { connect } from 'react-redux';
import { Icon, Menu, Layout } from 'antd';
import {
  setUserInfo
} from 'store/modules/home/action';
import {
  RouteComponentProps,
  useHistory,
  withRouter,
  NavLink
} from 'react-router-dom'
import { commonType } from 'api/types'
import Storage from 'utils/storage'
import './index.scss';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface ISideMenuProps extends RouteComponentProps {
  collapsed: boolean
}

const SideMenuCompotent: React.FC<ISideMenuProps> = props => {
  const { collapsed } = props
  let history = useHistory();

  const sidebarConfig = [
    {
      label: '首页',
      path: '/user'
    }, {
      label: '组件页面',
      path: '/frame/home',
      children: [
        {
          label: '展示页面',
          path: '/frame/home',
        },
        {
          label: '表单提交',
          path: '/frame/form',
        }
      ]
    }, {
      label: '用户中心',
      path: '/user'
    }
  ]

  const descMenu = (menus) => {
    return menus.map((menuItem, index) => {
      if (menuItem.children) {
        return (
          <SubMenu
            key={menuItem.label}
            title={
              <NavLink
                activeClassName="active-link"
                to={menuItem.path}
              >
              {menuItem.label}
              </NavLink>
            }
          >
            {descMenu(menuItem.children)}
         </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={menuItem.label}>
            <NavLink
              activeClassName="active-link"
              to={menuItem.path}
            >
              {menuItem.label}
            </NavLink>
          </Menu.Item>
        );
      }
  });
}

  return (
    <div className="side-menu">
      <Menu
        theme="dark" mode="inline">
        { descMenu(sidebarConfig) }
      </Menu>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.home.userInfo,
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
)(withRouter(SideMenuCompotent))
