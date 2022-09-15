import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/sign-up/sign-up';
import SignIn from './components/sign-in/sign-in';
import Home from './components/home/home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <h1 className='logo'>Chatscrum</h1>
          <Routes>
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Routes>
        </div>

      </BrowserRouter>
    )
  }
}

export default App;
