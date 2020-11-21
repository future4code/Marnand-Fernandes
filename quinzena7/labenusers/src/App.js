import React, { Component } from 'react'
import RegisterUser from './RegisterUser'
import ListUser from './ListUser'
import axios from 'axios'
import './App.css'

export default class App extends Component {
  state = {
    listUsers: [],
    userName: "",
    userEmail: "",
    verify: true
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
        alert("Usuário cadastrado com sucesso!")
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  deleteUser = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: { Authorization: "marnand-fernandes-tang" }
      })
      .then(response => {
        this.showUsers()
        alert("Usuário deletado com sucesso!")
        //console.log(id)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  onChangeUser = (event) => {
    this.setState({ userName: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ userEmail: event.target.value })
  }

  goList = () => {
    this.setState({ verify: false })
  }

  goRegister = () => {
    this.setState({ verify: true })
  }

  render() {
    const rendering = () => {
      if (this.state.verify) {
        return (
          <RegisterUser
            name={this.state.userName}
            email={this.state.userEmail}
            onChangeName={this.onChangeUser}
            onChangeEmail={this.onChangeEmail}
            onClickButton={this.createUser}
            onClickList={this.goList}
          />
        )
      } else {
        return (
          <ListUser 
            list={this.state.listUsers} 
            onClickRegister={this.goRegister} 
            onClickDelete={this.deleteUser} 
          />
        )
      }
    }


    return (
      <div className="App">
        {rendering()}
      </div>
    )
  }
}
