import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../../client/landing-page/LandingPage.js';
import TwilioPage from '../../client/twilio-page/TwilioPage.js';
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/sms" component={TwilioPage} />
  </Switch>
)

export default Main;
