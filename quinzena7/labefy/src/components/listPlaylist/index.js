import React, { Component } from 'react'
import ListTrack from '../listTrack'
import AddTrack from '../addTrack'

export default class ListPlaylist extends Component {
  render() {
    return (
      <div>
        listPlaylist
        <ListTrack />
        <AddTrack />
      </div>
    )
  }
}
