import React, { Component } from 'react'
import Register from './components/register'
import List from './components/list'
import logo from './components/logo.png'
import {Container} from './styled-app'

export default class App extends Component {
  state = {
    showList: false
  }

  change = () => {
    if (this.state.showList) {
      this.setState({showList: !this.state.showList})
    } else {
      this.setState({showList: !this.state.showList})
    }
    
  }

  render() {
    const hiddenList = () => {
      if (this.state.showList) {
        return (
          <aside>
            <List />
          </aside>
        )
      } else {
        return 
      }
    }

    return (
      <Container>
        <header>
          <h1 onClick={this.change}>Listas</h1>
          <img src={logo}/> 
          <h1>Labefy</h1>
        </header>
        <section>
          {hiddenList()}
          <main>
            <Register />
          </main>
        </section>
      </Container>
    )
  }
}

