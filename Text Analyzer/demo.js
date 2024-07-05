import React, { Component } from 'react'

export default class demo extends Component {
  render() {
    return (
      <div>
       <h1>Hi {this.props.name}</h1> 
      </div>
    )
  }
}
