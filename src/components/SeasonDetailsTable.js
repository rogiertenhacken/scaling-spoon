import React, { Component } from 'react'
import Winner from './Winner'
import '../App.css'

class SeasonDetailsTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      races: null
    }
  }

  componentDidMount () {
    fetch(`https://ergast.com/api/f1/${this.props.season}/results/1.json`)
      .then(response => response.json())
      .then(response => this.setState({ races: response.MRData.RaceTable.Races }))
  }

  render () {
    const { races } = this.state
    const { seasonWinner } = this.props

    if (races === null) return <div>Loading...</div>

    return (
      <div>
        <table className='t01' onClick={this.props.goBack}>
          <tbody className='tb01'>
            <tr>
              <th>race</th>
              <th>winner</th>
              <th>team</th>
            </tr>
            { races.map(race => {
              const highlight = race.Results['0'].Driver.driverId === seasonWinner
              let highLightBackground = {}
              if (highlight) {
                highLightBackground = {
                  backgroundColor: 'yellow'
                }
              }
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
        <button className='back' onClick={this.props.goBack}>back</button>
      </div>
    )
  }
}
SeasonDetailsTable.propTypes = {
  season: this.props,
  goBack: this.props,
  seasonWinner: this.props
}

export default SeasonDetailsTable
