import React, { Component } from 'react'
import save from '../RegisterUser/save.svg'
import logo from '../RegisterUser/logo.png'
import './register.css'

export default class RegisterUser extends Component {
  render() {
    return (
      <div className="register">
        <section className="background-register"></section>

        <fieldset>
        <h2>Cadastro de usuários</h2>
        <input value={this.props.name} onChange={this.props.onChangeName} placeholder="Nome" />

        <input value={this.props.email} onChange={this.props.onChangeEmail} placeholder="Email" />

        <p className="jump">
          Cadastre-se e venha aprender mais sobre React JS <br /><img src={logo} />
        </p>

        <button className="btn-save" onClick={this.props.onClickButton}>Salvar <img src={save} /></button>
        </fieldset>
        <button className="btn-list" onClick={this.props.onClickList}>Ir para lista <img src={save} /></button>
      </div>
    )
  }
}
