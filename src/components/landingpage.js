import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import DataTable from './DataTable'
import '../App.css'

class Landing extends Component {
  render () {
    return (
      <div>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <DataTable />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing
