import React, { Component } from 'react'

class Champions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          isLoaded: true,
          items: json
        })
        // console.log(this.state.items)
      })
  }

  render () {
    let { isLoaded, items } = this.state
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className='App'>
          <table className='userTable'>
            <tbody className='userTable'>
              <th>
                <tr>
                  <td>results</td>
                </tr>
              </th>
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
      )
    }
  }
}

export default Champions
