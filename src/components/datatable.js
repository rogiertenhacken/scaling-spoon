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

  componentDidMount () {
    const years = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
    //create an array of the links:
    const standingPromises = years.map(year => Promise.resolve(fetch(`http://ergast.com/api/f1/${year}/driverStandings.json`)))
    //use promise.all to wait to have all the fetched data loaded and use .then to do something with it.
    Promise.all(standingPromises)
      .then(standingsResponses => {
        standingsResponses
          .map(standingsResponse => standingsResponse.json())
          .forEach(response => {
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
  //function to call the details of the clicked season
  showSeasonDetails = (season, winner) => {
    this.setState({ showSeasonDetailsFor: { season, winner }})
  }
  //show the winner of the selected years:
  renderSeasonsTable = (standings) => {
    return (
      <table className='t01'>
        <tbody className='tb01'>
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
      return (
        <div>
          { this.renderSeasonsTable(standings) }
        </div>
      )
    }
  }
}

export default DataTable
