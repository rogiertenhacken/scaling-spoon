import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
// import Table from './table'
import DataTable from './datatable'

class Landing extends Component {
  render () {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
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
