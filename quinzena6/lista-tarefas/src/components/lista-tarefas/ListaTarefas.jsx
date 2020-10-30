import React, { Component } from 'react'
import { Container } from '../styled-components/StyledComponents'
import styled from 'styled-components'

const Lista = styled.li`
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

export default class ListaTarefas extends Component {
  // estado com valor do input e select
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: '1ª Tarefa',
        completa: false
      },
      {
        id: Date.now(),
        texto: '2ª Tarefa',
        completa: true
      }
    ],

    tarefa: '',

    filtro: ''
  }

  valorInput = (event) => {
    // permite que o input receba valores
    this.setState({ tarefa: event.target.value })
  }

  valorSelect = (event) => {
    this.setState({ filtro: event.target.value })
  }

  criarTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.tarefa,
      completa: false
    }

    const novasTarefas = [...this.state.tarefas, novaTarefa]

    this.setState({ tarefas: novasTarefas })

    console.log(this.state.tarefa)
  }

  render() {
    return (
      <Container>
        <h1>Lista de tarefas</h1>
        <input onChange={this.valorInput} /> <button onClick={this.criarTarefa}>Adicionar</button>
        <label>Filtro</label>

        <select onChange={this.valorSelect}>
          <option value="1">Nenhum</option>
          <option value="2">Pendentes</option>
          <option value="3">Completas</option>
        </select>

        <ul>
          {this.state.tarefas.map((tarefa) => { return <Lista>{tarefa.texto}</Lista> })}
        </ul>

      </Container>
    )
  }
}
