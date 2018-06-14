import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
// import Champions from './champions'
import Table from './table'

class Landing extends Component {
  render () {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            {/* <div className="banner-text">
        <h1>f<span style={{fontSize: '34px'}}>1</span> world champions</h1>
      </div> */}
            <Table />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing
