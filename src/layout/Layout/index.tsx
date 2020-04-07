import React from 'react'
import { connect } from 'react-redux';
import { Icon, Menu, Dropdown, Layout } from 'antd';
import {
  setUserInfo
} from 'store/modules/home/action';
import HeaderBar from 'layout/Headerbar'
import SideMenu from 'layout/SideMenu'
import routes from 'router/index'
import { BrowserRouter as Router, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { commonType } from 'api/types'
import Storage from 'utils/storage'
import './index.scss';

const { Header, Sider, Content } = Layout

interface IHeadbarProps extends RouteComponentProps {
  collapsed: boolean,
  userInfo: commonType.IUser,
  onMenuToggle?: () => void
}

const HeaderbarCompotent: React.FC<IHeadbarProps> = props => {
  const { collapsed } = props

  return (
    <Layout className="layout">
      <Sider collapsed={collapsed} width={200}>
        <SideMenu />
      </Sider>
      <Layout>
        <Header>
          <HeaderBar></HeaderBar>
        </Header>
        <Switch>
          {routes.map(route => (
              <Route
                key={route.id}
                path={route.path}
                render={routeProps => {
                  const Component = route.component
                  return (
                    <Component
                      {...routeProps}
                    />
                  )
                }}
              />
          ))}
        </Switch>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    collapsed: state.home.collapsed,
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
)(HeaderbarCompotent)
