import React, { Component } from 'react'
import '../App.css'
import { Table, TableHeader } from 'react-mdl'

class TablePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount () {
    fetch('http://ergast.com/api/f1/2005/driverstandings/1.json')
      .then(response => response.json())
      .then(json => {
        // console.log(json)
        this.setState({
          isLoaded: true,
          items: json
        })
      })
  }

  render () {
    let { isLoaded, items } = this.state
    // while loading it shows:
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      // this table comes from the react-mdl library
      return (
        <div className='App'>
          <table className='userTable'>
            <tbody className='userTable'>
              <th>
                <tr>
                  <td>results</td>
                </tr>
              </th>
              <tr>
                <td key={items.id}>
            Name: {items.MRData.StandingsTable.season} | Email: {items.MRData.series}
                </td>
              </tr>
            </tbody>
          </table>

          <Table
            name='happy now'
            sortable
            shadow={0}
            rows={[
              {winners: '{items.MRData.StandingsTable.season}', year: 0, car: 1},
              {winners: '{item.MRData.series}', year: 0, car: 1},
              {winners: 'Laminate (Gold on Blue)', year: 0, car: 2},
              {winners: 'Laminate (Gold)', year: 0, car: 1},
              {winners: 'Laminate (Gold on Silver)', year: 0, car: 1}
            ]}
          >
            <TableHeader
              name='winners'
              sortFn={(a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1])}
              tooltip='The amazing winners name'
            >
          WINNERS
            </TableHeader>
            <TableHeader
              numeric
              name='year'
              tooltip='Number of winners'
            >
          YEAR
            </TableHeader>
            <TableHeader
              numeric
              name='car'
              cellFormatter={(car) => `$${car.toFixed(2)}`}
              tooltip='car pet unit'
            >
          CAR
            </TableHeader>
          </Table>

        </div>
      )
    }
  }
}

export default TablePage
