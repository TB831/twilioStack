import React, { Component } from 'react';
import logo from './logo.svg';
import ButtonAppBar from '../../features/button-app-bar/ButtonAppBar.js';
import SMSForm from '../../features/sms/SMSForm.js';
class TwilioPage extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar/>
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <SMSForm />
        </header>
      </div>
    );
  }
}

export default TwilioPage;
