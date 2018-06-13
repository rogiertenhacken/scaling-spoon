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

      fetch("https://jsonplaceholder.typicode.com/users")
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

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {

    return(
    <div className="App">
      <Table
        sortable
        shadow={0}
        rows={[
          {winners: '{item.name}', quantity: 25, price: 2.90},
          {winners: '{item.name}', quantity: 50, price: 1.25},
          {winners: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
          {winners: 'Laminate (Gold)', quantity: 10, price: 2.35},
          {winners: 'Laminate (Gold on Silver)', quantity: 10, price: 2.35}
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
          numeric
          name="quantity"
          tooltip="Number of winners"
        >
          YEAR
        </TableHeader>
        <TableHeader
          numeric
          name="price"
          cellFormatter={(price) => `\$${price.toFixed(2)}`}
          tooltip="Price pet unit"
        >
          CAR
        </TableHeader>
      </Table>
    </div>
  )}
  }
}

export default TablePage;
