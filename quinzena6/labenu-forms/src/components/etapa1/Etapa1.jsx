import React, { Component } from 'react'
import {Container} from '../styled-components/styled'


export default class Etapa1 extends Component {
  render() {
    return (
      <Container>
        <h1>Etapa 1 - Dados Gerais</h1>
        <section>
          <label htmlFor="">
            1. Qual seu nome?
          </label>
          <input />
        </section>

        <section>
          <label htmlFor="">
            2. Qual sua idade?
          </label>
          <input />
        </section>

        <section>
          <label htmlFor="">
            3. Qual seu email?
          </label>
          <input />
        </section>

        <section>
          <label htmlFor="">
            4. Qual sua escolaridade?
          </label>
          <select name="" id="">
            <option value="">Ensino médio incompleto</option>
            <option value="">Ensino médio completo</option>
            <option value="">Ensino superior incompleto</option>
            <option value="">Ensino superior completo</option>
          </select>
        </section>
      </Container>
    )
  }
}
