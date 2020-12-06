import React, { Component } from 'react'
import arrow from '../RegisterUser/arrow.svg'
import logo from '../RegisterUser/logo.png'
import x from '../ListUser/x.svg'
import './list-user.css'

export default class ListUser extends Component {
  state = {
    list: this.props.list
  }

  render() {
    return (
      <div>
        <section className="background-list"></section>

        <section className="list-user">
          <h2>Usuários já cadastrados</h2>

          {this.props.list.map(param => {
            return (
              <p>
                {param.name}
                <img 
                  onClick={() => {
                    this.props.onClickDelete(param.id)
                  }} 
                  src={x} 
                  title="Excluir" 
                />
              </p>
            )
          })}

          <img src={logo} />
        </section>

        <button className="btn-back" onClick={this.props.onClickRegister}>Voltar <img src={arrow} /></button>
      </div>
    )
  }
}
