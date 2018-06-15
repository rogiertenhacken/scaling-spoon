// import React, { Component } from 'react'
// import '../App.css'
//
// let URLS = [
//   'http://ergast.com/api/f1/2005/driverstandings/1.json',
//   'http://ergast.com/api/f1/2006/driverstandings/1.json',
//   'http://ergast.com/api/f1/2007/driverstandings/1.json',
// ]
//
// class DataTable extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       data: []
//     }
//   }
// }
//
//
// fetchData ()
//     var urlArray = [];
//     console.log('fetchData')
//     for (var i = 0; i < URLS.length; i++) {
//       urlArray.push(URLS[i]);
//     }
//
//
//     fetch(urlArray)
//     .then(response => response.json())
//     .then(json => {
//       // console.log(json)
//       this.setState({
//         isLoaded: true,
//         items: json
//       })
//     })
//
//
//
//   componentDidMount()
//       this.fetchData()
//
//
//
//     // render-function mounts the component in the browser:
//     render () {
//       let { isLoaded, items } = this.state
//       // while loading it shows:
//       if (!isLoaded) {
//         return <div>Loading...</div>
//       } else {
//         return (
//           <div className='App'>hello world</div>
//           <div className='App'>
//             <table id='t01'>
//               <tbody id='tb01'>
//                 <tr>
//                   <th>year</th>
//                   <th>winner</th>
//                   <th>team</th>
//                 </tr>
//                 <tr>
//                   <td key={data.id}>{items.MRData.StandingsTable.season}</td>
//                   <td>Dean</td>
//                   <td>{items.MRData.series}</td>
//                 </tr>
//                 <tr>
//                   <td>{items.MRData.StandingsTable.season}</td>
//                   <td>Jackson</td>
//                   <td>{items.MRData.series}</td>
//                 </tr>
//                 <tr>
//                   <td>{items.MRData.StandingsTable.season}</td>
//                   <td>Doe</td>
//                   <td>{items.MRData.series}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )
//       }
//     }
//   }
//
// export default DataTable
