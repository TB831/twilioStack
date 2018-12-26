import React, { Component } from 'react';
import './App.css';
// import { Layout, Navigation, Drawer, Content } from 'react-mdl';
//Header
import Main from './components/routes/main/Main.js';
// import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
            <Main/>

</div>

    );
  }
}

export default App;
