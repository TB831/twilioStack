import React, { Component } from 'react';
import logo from './logo.svg';
import PrimarySearchAppBar from '../../features/primary-search-app-bar/PrimarySearchAppBar.js';
import SMSForm from '../../features/sms/SMSForm.js';

class TwilioPage extends Component {
  render() {
    return (
      <div>
        <PrimarySearchAppBar/>
         <header className="App-header">
          <SMSForm />
        </header>
      </div>
    );
  }
}

export default TwilioPage;
