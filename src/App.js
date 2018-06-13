import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        MRData: [],
        isLoaded: false
      }
  }

//https://jsonplaceholder.typicode.com/users
//http://ergast.com/api/f1/2005/driverstandings/1.json
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

      return (
        <div className="App">
          <table>
            <tbody>
              <tr>
                {items.map(item => (
                  <td key={item.id}>
                    Name: {item.name} | Email: {item.email}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}}
    }

export default App;

// return (
//   <div className="App">
//
//     <table>
//       <tbody>
//         <tr>
//           {items.map(item => (
//             <td key={item.id}>
//               Name: {item.MRData.StandingsTable.season}
//
//               {/* <td key={item.id}>
//                 Email: {item.email}
//               </td> */}
//             </td>
//           ))};
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

///////

/* <ul> give {}around this block
  {items.map(item => (
    <li key={item.id}>
  Name: {item.name} | Email: {item.email}
    </li>
  ))}
</ul> */

// {items.map(item => (
//   <td key={item.id}>
//     Name: {item.driver} | Email: {item.season}
//   </td>
// ))}

/* {items.map(item => (
  <td key={item.id}>
    Name: {item.name} | Email: {item.email}
  </td>
))} */
