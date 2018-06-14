import React, { Component } from 'react';
import '../App.css';
import { Table, TableHeader } from 'react-mdl';

class TablePage extends Component {

  constructor(props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false
      }
  }

  componentDidMount() {

      fetch("http://ergast.com/api/f1/2005/driverstandings/1.json")
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({
            isLoaded: true,
            items: json,
          })
          console.log(this.state.items);
        });
      }

  render() {

    let { isLoaded, items } = this.state;

    // while loading it shows:
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {

    // this table comes from the react-mdl library
    return(
    <div className="App">
      <Table
        sortable
        shadow={0}
        rows={[
          {winners: '{value.MRData.StandingsTable.season}', year: 0, car: 1},
          {winners: '{item.MRData.series}', year: 0, car: 1},
          {winners: 'Laminate (Gold on Blue)', year: 0, car: 2},
          {winners: 'Laminate (Gold)', year: 0, car: 1},
          {winners: 'Laminate (Gold on Silver)', year: 0, car: 1}
        ]}
      >
        <TableHeader
          name="winners"
          sortFn={(a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1])}
          tooltip="The amazing winners name"
        >
          WINNERS
        </TableHeader>
        <TableHeader
          // numeric
          // name="year"
          // tooltip="Number of winners"
        >
          YEAR
        </TableHeader>
        <TableHeader
          // numeric
          // name="car"
          // cellFormatter={(car) => `\$${car.toFixed(2)}`}
          // tooltip="car pet unit"
        >
          year
        </TableHeader>
      </Table>
    </div>
  )}
  }
}

export default TablePage;
