import React, { Component } from 'react';
import PrimarySearchAppBar from '../../features/primary-search-app-bar/PrimarySearchAppBar.js';
import PrimaryLandingPageDisplay from '../../features/primary-landing-page-display/PrimaryLandingPageDisplay.js';
import PrimaryLandingPageGrid from '../../features/primary-landing-page-grid/PrimaryLandingPageGrid.js';
import FirebaseAuthentication from '../../features/firebase-authentication/FirebaseAuthentication.js';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <PrimarySearchAppBar/>
        <FirebaseAuthentication/>
      </div>
    );
  }
}

export default LoginPage;
