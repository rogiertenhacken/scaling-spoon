import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import landing from './components/landingpage';
import TablePage from './components/table';
import { Link } from 'react-router-dom';


class App extends Component {

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       MRData: [],
  //       isLoaded: false
  //     }
  // }

  render() {
    return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="FORMULA 1" scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/champions">Champions</Link>
            <Link to="/table">Table</Link>
          </Navigation>
        </Header>
        <Drawer title="Menu">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/champions">Champions</Link>
            <Link to="/table">Table</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  )}
//
// //https://jsonplaceholder.typicode.com/users
// //http://ergast.com/api/f1/2005/driverstandings/1.json
//   componentDidMount() {
//
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(json => {
//         console.log(json);
//         this.setState({
//           isLoaded: true,
//           items: json,
//         })
//         console.log(this.state.items);
//       });
//     }
//
//   render() {
//
//     let { isLoaded, items } = this.state;
//
//     if (!isLoaded) {
//       return <div>Loading...</div>;
//     }
//
//     else {
//
//       return (
//         <div className="App">
//           <table>
//             <tbody>
//               <tr>
//                 {items.map(item => (
//                   <td key={item.id}>
//                     Name: {item.name} | Email: {item.email}
//                   </td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}}
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
