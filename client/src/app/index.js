import React from 'react';
import Home from './pages/Home';
import Finder from './pages/Finder';
import Login from './pages/Login';
import Profile from './pages/Profile'; 
import Error404 from './pages/Error404';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {validToken, PrivateRoute} from './redux/actions/act_authorize';
import  store  from './redux/store';

import {spriteLoad} from './components/sprite'


const App = () => {
spriteLoad();
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={()=> (
              validToken() 
              ? <Redirect to="/home" />
              : <Login />
            )}/>
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/logout" component={Login} />
            <PrivateRoute exact path="/finder" component={Finder} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}
export default App;
