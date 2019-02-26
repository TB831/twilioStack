import React, { Component } from 'react'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import './firebase.css'

firebase.initializeApp({
    apiKey: "AIzaSyCuLjNSgV9aoXZqxmFXFIbIwvThJCvxgrE",
    authDomain: "flightline-25ce2.firebaseapp.com"
})

class FirebaseAuthentication extends Component {
  state={ isSignedIn: false}
  uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess: () => false
  }
}

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      console.log("user",user);
      this.setState({isSignedIn: !!user})
    })
  

  }


  render() {
    return (
      <div className="container">
      <h1> Please Sign Up </h1>
            {this.state.isSignedIn ? (
            <span>
            <h1> Welcome {firebase.auth().currentUser.displayName} </h1>
            <img alt="profile picture" src={firebase.auth().currentUser.photoURL} />
            <div> Signed In! </div>
            <button onClick={()=>firebase.auth().signOut()}> Sign Out! </button>
            </span>
            ):(
            <StyledFirebaseAuth 
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
              />
            )}
      </div>

    );
  }
}

export default FirebaseAuthentication;
