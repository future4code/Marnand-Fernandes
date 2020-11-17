import React, { Component } from 'react'

export default class CreatePlaylist extends Component {
  render() {
    return (
      <div>
        Playlist
        <button onClick={this.props.changeFalse}>Go</button>
      </div>
    )
  }
}
