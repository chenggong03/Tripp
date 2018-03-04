import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainWithHeader from './components/MainWithHeader';
import MainWithDoubleHeader from './components/MainWithDoubleHeader';
import WelcomePage from './components/WelcomePage';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import GuideSignup from './components/auth/GuideSignup';
import Profile from './components/Profile';
import Progress from './components/Progress';
import Schedule from './components/Schedule';
import SearchResult from './components/SearchResult';
import Trips from './components/Trips';

export default (
  <div>
    <Route path="/" component={WelcomePage} />
    <Route path="/login" component={MainWithHeader}>
      <IndexRoute component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/guideSignup" component={GuideSignup} />
      <Route path="/profile" component={Profile} />
      <Route path="/searchResult" component={SearchResult} />
      <Route path="/trips" component={Trips} />
    </Route>
    <Route path="/schedule" component={MainWithDoubleHeader}>
      <IndexRoute component={Schedule} />
      <Route path="/progress" component={Progress} />
    </Route>
  </div>
);
