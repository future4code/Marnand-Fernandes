import React, { Component } from 'react'
import styled from 'styled-components'
import Etapa1 from './components/etapa1/Etapa1'
import Etapa2 from './components/etapa2/Etapa2'
import Etapa3 from './components/etapa3/Etapa3'
import Final from './components/final/Final'

const Container = styled.div`
  width: 50%; 
  
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid black;

  h1 {
    color: #1877f2;
  }

  button {
    margin: 10px;
    width: 200px;
    padding: 10px;

    border: none;
    border-radius: 5px;

    font-weight: bold;

    cursor: pointer;

    background-color: #42b72a;
    color: #fff;
  }
`

export default class App extends Component {
  state = {
    etapa: 1,
  }

  proximaEtapa = () => {
    const novaEtapa = this.state.etapa + 1
    this.setState({ etapa: novaEtapa })

    if (this.state.etapa >= 4) {
      const novaEtapa = this.state.etapa - 3
      this.setState({ etapa: novaEtapa })
    }
  }

  render() {

    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />
        case 2:
          return <Etapa2 />
        case 3:
          return <Etapa3 />
        case 4:
          return <Final />
        default:
          return <div>Erro! Página não encontrada</div>
      }
    }

    return (
      <Container>
        {renderizaEtapa()}

        {this.state.etapa === 4 ? <p></p> : <button onClick={this.proximaEtapa}>Próxima etapa</button>}
      </Container>
    )
  }
}

