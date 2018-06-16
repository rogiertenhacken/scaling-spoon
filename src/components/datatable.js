import React, { Component } from 'react'
import '../App.css'
import SeasonDetailsTable from './SeasonDetailsTable'
import Winner from './Winner'

class DataTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      standings: null,
      showSeasonDetailsFor: {
        season: null,
        winner: null,
      }
    }
  }
  // set array of urls:
  componentDidMount () {
    // const years = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
    const years = ['2005', '2006']

    const standingPromises = years.map(year => Promise.resolve(fetch(`http://ergast.com/api/f1/${year}/driverStandings.json`)))

    Promise.all(standingPromises)
      .then(standingsResponses => {
        standingsResponses
          .map(standingsResponse => standingsResponse.json())
          .forEach(response => {
            console.log('hello');
            response.then(data => {
              const seasonStandings = data.MRData.StandingsTable.StandingsLists[0]
              this.setState((previousState) => {
                const newStandings = {...previousState.standings}
                newStandings[seasonStandings.season] = seasonStandings
                return { standings: newStandings }
              })
            })
          })
      })
  }

  showSeasonDetails = (season, winner) => {
    console.log(winner);
    this.setState({ showSeasonDetailsFor: { season, winner }})
  }

  renderSeasonsTable = (standings) => {
    return (
      <table id='t01'>
        <tbody id='tb01'>
          <tr>
            <th>year</th>
            <th>winner</th>
            <th>team</th>
          </tr>
          {
            Object.keys(standings).map(season => {
              const driverName = standings[season].DriverStandings['0'].Driver.driverId
              const teamName = standings[season].DriverStandings['0'].Constructors[0].constructorId
              return (
                <Winner
                  key={season}
                  wonEvent={season}
                  driverName={driverName}
                  teamName={teamName}
                  showSeasonDetails={() => this.showSeasonDetails(season, driverName)}
                />
              )
            })}
        </tbody>
      </table>
    )
  }
  // render-function mounts the component in the browser:
  render() {

    let { standings, showSeasonDetailsFor } = this.state
    // while loading it shows:
    if (standings === null) {
      return <div>Loading...</div>
    } else if( showSeasonDetailsFor.season !== null ) {
      return <SeasonDetailsTable
        season={showSeasonDetailsFor.season}
        seasonWinner={showSeasonDetailsFor.winner}
        goBack={() => this.showSeasonDetails(null, null)}
      />
    } else {
      console.log(this.state.standings);
      return (
        <div className='App'>
          { this.renderSeasonsTable(standings) }
        </div>
      )
    }
  }
}

export default DataTable