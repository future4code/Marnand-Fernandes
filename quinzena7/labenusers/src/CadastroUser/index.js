import React, { Component } from 'react'

export default class CadastroUser extends Component {
  render() {
    return (
      <div>
        <label>Nome do usuário:</label>
        <input value={this.props.name} onChange={this.props.onChangeName} />

        <label>Email do usuário:</label>
        <input value={this.props.email} onChange={this.props.onChangeEmail} />

        <button onClick={this.props.onClickButton}>Salvar</button>
      </div>
    )
  }
}
