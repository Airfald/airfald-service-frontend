import React from 'react'
import { connect } from 'react-redux';
import { Layout, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import {
  setUserInfo
} from 'store/modules/home/action';
import HeaderBar from 'layout/Headerbar'
import SideMenu from 'layout/SideMenu'
import routeConfig from 'router/index'
import { BrowserRouter as Router, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { commonType } from 'api/types'
import './index.scss';

const { Header, Sider, Content } = Layout

interface ILayoutProps extends RouteComponentProps {
  collapsed: boolean,
  currentRoute: any,
  userInfo: commonType.IUser,
  onMenuToggle?: () => void
}

const LayoutCompotent: React.FC<ILayoutProps> = props => {
  const { collapsed, currentRoute } = props
  console.log('currentRoute', currentRoute)

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

  const HeaderBreadcrumb = (routes) => {
    return (
      <Breadcrumb>
      {
        routes.map(item => (
          <Breadcrumb.Item key={item}>
            <Link to={item.path}>{item.label}</Link>
          </Breadcrumb.Item>
        ))
      }
      </Breadcrumb>
    )
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
          { HeaderBreadcrumb(currentRoute.pathRoutes || []) }
          <Switch>
            { descRouter(routeConfig) }
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    currentRoute: state.home.currentRoute,
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
