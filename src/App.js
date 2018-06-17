import React, { Component } from 'react'
import './App.css'
import Main from './components/main'

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

// class App extends Component {
//   render () {
//     return (
//       <div className='header-color' title='FORMULA 1'>
//         <h1>formula <span style={{fontSize: '.8em'}}>1</span></h1>
//         <Layout>
//           <Content>
//             <div className='page-content' />
//             <Main />
//           </Content>
//         </Layout>
//       </div>
//     )
//   }
// }
