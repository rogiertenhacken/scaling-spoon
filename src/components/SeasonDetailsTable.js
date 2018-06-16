import React, { Component } from 'react'
import Winner from './Winner'

class SeasonDetailsTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      races: null
    }
  }

  componentDidMount () {
    fetch(`http://ergast.com/api/f1/${this.props.season}/results/1.json`)
      .then(response => response.json())
      .then(response => this.setState({ races: response.MRData.RaceTable.Races }))
  }

  render () {
    const { races } = this.state
    const { seasonWinner } = this.props

    if (races === null) return <h1>Loading</h1>

    return (
      <table id='t01' onClick={this.props.goBack}>
        <tbody id='tb01'>
          <tr>
            <th>race</th>
            <th>winner</th>
            <th>team</th>
          </tr>
          { races.map(race => {
            const highlight = race.Results['0'].Driver.driverId === seasonWinner
            let hightLightBackground = {}
            if (highlight) {
              hightLightBackground = {
                backgroundColor: 'yellow'
              }
            }
            console.log(highlight);
            return <Winner
              key={race.raceName}
              wonEvent={race.raceName}
              driverName={race.Results['0'].Driver.driverId}
              teamName={race.Results['0'].Constructor.constructorId}
              className={highlight ? 'highlight' : ''}
            />
          })}
        </tbody>
      </table>
    )
  }
}

export default SeasonDetailsTable
