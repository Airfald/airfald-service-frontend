import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import LoginCompotent from 'views/login'
import reducers from './store'
import RootCompotent from 'views/root'
import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './App.scss';

moment.locale('zh-cn');
// const loggerMiddleware = createLogger()
const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunkMiddleware, // allow us dispatch function
      // loggerMiddleware   // use to log  action
    ),
  )
)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log('subscribe', store.getState()))

// Stop listening to state updates
// unsubscribe()

const App: React.FC<RouteComponentProps> = props => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={LoginCompotent} />
            {/* /login 放在前面， 匹配 */}
            <Route path="/" component={RootCompotent} />
          </Switch>
        </Router>
      </Provider>
    </ConfigProvider>
  );
};

export default App;
