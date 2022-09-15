import React from 'react'
import './App.css';
import SignUp from './components/sign-up/sign-up';
import SignIn from './components/sign-in/sign-in';
import Home from './components/home/home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className='logo'>Chatscrum</h1>
        <SignUp />
        <SignIn/>
        <Home />
      </div>
    )
  }
}

export default App;
