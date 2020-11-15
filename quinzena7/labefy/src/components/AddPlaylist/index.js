import React, { Component } from 'react'
import {PlaylistStyled} from './styled-playlist'
import happy from '../images/happy.svg'

export default class AddPlaylist extends Component {
  render() {
    return (
      <PlaylistStyled>
        <h1>Vamos nessa!</h1>
        <p>Crie sua playlist</p>
        <input placeholder="Playlist Name" /><button onClick={this.props.change}>Salvar</button>
        <section>
          <img src={happy} />
        </section>
      </PlaylistStyled>
    )
  }
}
