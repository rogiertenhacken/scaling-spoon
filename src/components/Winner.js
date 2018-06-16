import React, { Component } from 'react'

const Winner = (props) => {
  return (
    <tr className={props.className} onClick={props.showSeasonDetails}>
      <td>{props.wonEvent}</td>
      <td>{props.driverName}</td>
      <td>{props.teamName}</td>
    </tr>
  )
}

export default Winner
