import React, { Component } from 'react'
import { Container } from '../styled-components/StyledComponents'
import { Lista } from '../styled-components/StyledComponents'

export default class ListaTarefas extends Component {
  // estado com valor do input e select
  state = {
    tarefas: [],

    tarefa: '',

    filtro: ''
  }

  //-------------------------
  componentDidMount() {
    const objTarefas = JSON.parse(localStorage.getItem('tarefas'))
    if (objTarefas) {
      this.setState({ tarefas: objTarefas })
    }
  }

  componentDidUpdate() {
    const strTarefas = JSON.stringify(this.state.tarefas)
    localStorage.setItem('tarefas', strTarefas)
  }

  //-------------------------
  valorInput = (event) => {
    // permite que o input receba valores
    this.setState({ tarefa: event.target.value })
  }

  criarTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.tarefa,
      completa: false
    }

    const novasTarefas = [...this.state.tarefas, novaTarefa]

    this.setState({ tarefas: novasTarefas })

    //console.log(this.state.tarefa)
  }

  //-------------------------
  valorSelect = (event) => {
    this.setState({ filtro: event.target.value })
  }

  //-------------------------
  alteraCompleta = (id) => {
    const attCompleta = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novoValor = { ...tarefa, completa: !tarefa.completa }
        return novoValor
      } else {
        return tarefa
      }
    })

    this.setState({ tarefas: attCompleta })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <Container>
        <h1>Lista de tarefas</h1>
        <input onChange={this.valorInput} /> <button onClick={this.criarTarefa}>Adicionar</button>
        <label>Filtro</label>

        <select value={this.state.filter} onChange={this.valorSelect}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>

        <ul>
          {listaFiltrada.map((tarefa) => {
            return (
              <Lista
                onClick={() => this.alteraCompleta(tarefa.id)}
                completa={tarefa.completa}>
                {tarefa.texto}
              </Lista>
            )
          })}
        </ul>

      </Container>
    )
  }
}
