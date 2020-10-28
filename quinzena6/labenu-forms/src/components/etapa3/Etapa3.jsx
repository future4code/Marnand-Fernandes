import React, { Component } from 'react'
import {Container} from '../styled-components/styled'

export default class Etapa3 extends Component {
  render() {
    return (
      <Container>
        <h1>Etapa 3 - Informações Gerais de Ensino</h1>
        <section>
          <label htmlFor="">5. Por que você não terminou um curso de graduação?</label>
          <input />
        </section>

        <section>
          <label htmlFor="">6. Você fez algum curso complementar?</label>
          <select name="" id="">
            <option value="">Nenhum</option>
            <option value="">Curso técnico</option>
            <option value="">Curso de inglês</option>
          </select>
        </section>
      </Container>
    )
  }
}
