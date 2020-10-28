import React, { Component } from 'react'
import {Container} from '../styled-components/styled'

export default class Etapa2 extends Component {
  render() {
    return (
      <Container>
        <h1>Etapa 2 - Informações do Ensino</h1>
        <section>
          <label htmlFor="">5. Qual curso?</label>
          <input />
        </section>

        <section>
          <label htmlFor="">6. Qual unidade de ensino?</label>
          <input />
        </section>
      </Container>
    )
  }
}
