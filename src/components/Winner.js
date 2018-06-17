import React, {} from 'react'

const Winner = (props) => {
  return (
    <tr className={props.className} onClick={props.showSeasonDetails}>
      <td>{props.wonEvent}</td>
      <td>{props.driverName}</td>
      <td>{props.teamName}</td>
    </tr>
  )
}
Winner.propTypes = {
  wonEvent: this.props,
  driverName: this.props,
  teamName: this.props,
  className: this.props,
  showSeasonDetails: this.props
}

export default Winner
