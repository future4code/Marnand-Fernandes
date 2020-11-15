import React, { Component } from 'react'
import {MusicStyled} from './styled-music'
import {BtnListP} from './styled-music'
import {BtnListM} from './styled-music'

export default class AddMusic extends Component {
  render() {
    return (
      <MusicStyled>
        <h1>Vamos nessa!</h1>
        <p>Adicione suas músicas favoritas a playlist ...</p>
        <input placeholder="Nome da música" />
        <input placeholder="Artista" />
        <input placeholder="Url da música" />
        <button>Adicionar</button>
        <BtnListP>Playlists</BtnListP>
        <BtnListM>Músicas</BtnListM>
      </MusicStyled>
    )
  }
}
