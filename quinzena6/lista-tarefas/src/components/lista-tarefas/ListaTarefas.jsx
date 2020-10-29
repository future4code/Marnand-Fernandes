import React, { Component } from 'react'
import {Container} from '../styled-components/StyledComponents'

export default class ListaTarefas extends Component {
  render() {
    return (
      <Container>
        <h1>Lista de tarefas</h1>
        <input /> <button>Adicionar</button>
        <label>Filtro</label>

        <select>
          <option>Nenhum</option>
          <option>Pendentes</option>
          <option>Completas</option>
        </select>

        <section>

        </section>
      </Container>
    )
  }
}
