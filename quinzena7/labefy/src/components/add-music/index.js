import React, { Component } from 'react'

export default class AddMusic extends Component {
  render() {
    return (
      <div>
        Music
        <button onClick={this.props.changeTrue}>Go</button>
      </div>
    )
  }
}
