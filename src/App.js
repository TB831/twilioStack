import React, { Component } from 'react';
import './App.css';
import Main from './components/routes/main/Main.js';


class App extends Component {
  constructor(props){
    super();
    this.state={
      show:'1',
    };
  }

  changeData(show){
    this.setState({show: show});
  }

  render() {
    console.log(this.props.contacts);
    return (
    <Main contacts={this.props.contacts} />
    );
  }
}

export default App;
