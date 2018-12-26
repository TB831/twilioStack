import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../../client/landing-page/LandingPage.js';
import SMS from '../../features/sms/SMSForm.js';
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/sms" component={SMS} />
  </Switch>
)

export default Main;
