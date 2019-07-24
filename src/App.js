import React from 'react';
import Login from './components/login'
import Dashboard from './components/dashboard'
import Nav from './components/nav'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  render() {
  return (
    <div className="wrapper">
    <Nav loggedIn={this.state.isLoggedIn} login={this.handleLogin}/>
     {this.state.loggedIn ? 
    <Login login={this.handleLogin}/> :
    <Dashboard/>}
    </div>
  );
}
}

export default App;
