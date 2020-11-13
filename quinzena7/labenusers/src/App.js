import React, { Component } from 'react'
import CadastroUser from './CadastroUser'
import ListUser from './ListUser'
import axios from 'axios'
import './App.css'

export default class App extends Component {
  state = {
    listUsers: [],
    userName: "",
    userEmail: ""
  }

  componentDidMount = () => {
    this.showUsers()
  }

  showUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: { Authorization: "marnand-fernandes-tang" }
      })
      .then(response => {
        this.setState({ listUsers: response.data })
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  createUser = () => {
    const body = {
        name: this.state.userName,
        email: this.state.userEmail
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: { Authorization: "marnand-fernandes-tang" }
      })
      .then(response => {
        this.showUsers() //chama showUsers para atualizar a lista
        this.setState({ userName: "" }) //limpa os inputs
        this.setState({ userEmail: "" }) //limpa os inputs
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  onChangeUser = (event) => {
    this.setState({userName: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({userEmail: event.target.value})
  }

  render() {
    return (
      <div className="App">

        <CadastroUser 
          name={this.state.userName}
          email={this.state.userEmail}
          onChangeName = {this.onChangeUser}
          onChangeEmail = {this.onChangeEmail}
          onClickButton = {this.createUser}
        />

        <ListUser
          list={this.state.listUsers}
        />
      </div>
    )
  }
}
