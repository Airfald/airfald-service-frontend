import React from 'react'
import { connect } from 'react-redux';
import { Icon, Menu, Dropdown, Layout } from 'antd';
import {
  setUserInfo
} from 'store/modules/home/action';
import HeaderBar from 'layout/Headerbar'
import SideMenu from 'layout/SideMenu'
import routeConfig from 'router/index'
import { BrowserRouter as Router, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { commonType } from 'api/types'
import Storage from 'utils/storage'
import './index.scss';

const { Header, Sider, Content } = Layout

interface ILayoutProps extends RouteComponentProps {
  collapsed: boolean,
  userInfo: commonType.IUser,
  onMenuToggle?: () => void
}

const LayoutCompotent: React.FC<ILayoutProps> = props => {
  const { collapsed } = props

  const descRouter = (routes) => {
    return routes.map((route, i) => {
        if (route.routes) {
            return (
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
              >
                {descRouter(route.routes)}
              </Route>
            );
        } else {
            return (
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
              >
              </Route>
            );
        }
    });
  }

  return (
    <Layout className="layout">
      <Sider collapsed={collapsed} width={200}>
        <div className="logo">logo</div>
        <SideMenu />
      </Sider>
      <Layout>
        <Header>
          <HeaderBar></HeaderBar>
        </Header>
        <Content>
          <Switch>
            { descRouter(routeConfig) }
            <Redirect from="/" to="/home" />
          </Switch>
        </Content>
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
)(LayoutCompotent)
