import React, { Component } from 'react';
import PrimarySearchAppBar from '../../features/primary-search-app-bar/PrimarySearchAppBar.js';
import PrimaryLandingPageDisplay from '../../features/primary-landing-page-display/PrimaryLandingPageDisplay.js';
import PrimaryLandingPageGrid from '../../features/primary-landing-page-grid/PrimaryLandingPageGrid.js';

class LandingPage extends Component {
  render() {
    console.log(this.props.contacts);
    return (
      <div>
        <PrimarySearchAppBar/>
        <h1> {this.props.contacts.name} </h1>
        <PrimaryLandingPageDisplay/>
        <PrimaryLandingPageGrid/>
      </div>
    );
  }
}

export default LandingPage;
