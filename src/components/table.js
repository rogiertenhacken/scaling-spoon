import React, { Component } from 'react';
import '../App.css';
import { Table, TableHeader } from 'react-mdl';

class TablePage extends Component {
  render() {
    return(
    <div className="App">
      <h1>table page</h1>

      <Table
        sortable
        shadow={0}
        rows={[
          {winners: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
          {winners: 'Plywood (Birch)', quantity: 50, price: 1.25},
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
          tooltip="Number of winnerss"
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
    )
  }
}

export default TablePage;
