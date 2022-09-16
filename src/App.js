import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/sign-up/sign-up';
import SignIn from './components/sign-in/sign-in';
import Home from './components/home/home';
import Scrumboard from './components/scrumboard/scrumboard';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <h1 className='logo'>Chatscrum</h1>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/scrumboard' element={<Scrumboard />} />
          </Routes>
        </div>

      </BrowserRouter>
    )
  }
}

export default App;
