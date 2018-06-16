import React, { Component } from 'react'
import '../App.css'

class TablePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  // here the api-call is made:
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
  // render-function mounts the component in the browser:
  render () {
    let { isLoaded, items } = this.state
    // while loading it shows:
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className='App'>
          <table id='t01'>
            <tbody id='tb01'>
              <tr>
                <th>year</th>
                <th>winner</th>
                <th>team</th>
              </tr>
              <tr>
                <td key={items.id}>{items.MRData.StandingsTable.season}</td>
                <td>Dean</td>
                <td>{items.MRData.series}</td>
              </tr>
              <tr>
                <td>{items.MRData.StandingsTable.season}</td>
                <td>Jackson</td>
                <td>{items.MRData.series}</td>
              </tr>
              <tr>
                <td>{items.MRData.StandingsTable.season}</td>
                <td>Doe</td>
                <td>{items.MRData.series}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default TablePage
