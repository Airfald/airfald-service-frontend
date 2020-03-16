import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import routes from './router/index'
import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './App.scss';
moment.locale('zh-cn');

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
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
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </ConfigProvider>
  );
};

export default App;
