import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../../client/landing-page/LandingPage.js';
import TwilioPage from '../../client/twilio-page/TwilioPage.js';
import LoginPage from '../../client/login-page/LoginPage.js';

class Main extends Component {
  render(){
    console.log(this.props.contacts);
    return(
 <Switch>
    <Route exact path="/" component={() => <LandingPage contacts={this.props.contacts} /> } />
    <Route exact path="/sms" component={TwilioPage} />
    <Route exact path="/login" component={LoginPage} />
  </Switch>
    )
  }
 
}

export default Main;
