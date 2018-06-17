import React, { Component } from 'react'
import './App.css'
import Main from './components/Main'

class App extends Component {
  render () {
    return (
      <div className='header-color'>
        <h1 className='title'>formula <span style={{fontSize: '.8em'}}>1</span></h1>
        <div className='page-content' />
        <Main />
      </div>
    )
  }
}

export default App
