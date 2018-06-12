import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false
      }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
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
                    Name: {item.name}

                    <td key={item.id}>
                      Email: {item.email}
                    </td>
                  </td>
                ))};
              </tr>
            </tbody>
          </table>



        </div>
      );
    }


  }
}

export default App;
