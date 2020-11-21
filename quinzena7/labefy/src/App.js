import React, { Component } from 'react'
import {Container} from './styled-app'
import ListPlarlist from './components/listPlaylist'
import AddPlarlist from './components/addPlaylist'
import axios from 'axios'

export default class App extends Component {
  render() {
    return (
      <Container>
        <ListPlarlist />
        <AddPlarlist />
      </Container>
    )
  }
}
