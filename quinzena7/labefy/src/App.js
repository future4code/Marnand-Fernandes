import React, { Component } from 'react'
import AddPlaylist from './components/AddPlaylist'
import AddMusic from './components/AddMusic'
import { Container } from './styled-app'
import { Aside } from './styled-app'

export default class App extends Component {
  state = {
    ver: true
  }

  register = () => {
    this.setState({ver: false})
  }

  render() {
    const renderiza = () => {
      if (this.state.ver) {
        return <AddPlaylist change={this.register} />
      } else {
        return <AddMusic />
      }
    }
    return (
      <Container>
        <Aside>
          {renderiza()}
        </Aside>
      </Container>
    )
  }
}

