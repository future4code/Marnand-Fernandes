import React from 'react';
import styled from 'styled-components';
import './App.css';
import Post from './components/Post/Post';

const Format = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 0;
`
const Finput = styled.input`
  margin-bottom: 10px;

  padding: 6px 5px;
`

const Fbutton = styled.button`
&:hover{
  background-color: #32a420;
}
  margin-bottom: 10px;

  border: none;
  border-radius: 4px;

  padding: 8px 5px;

  font-weight: bold;

  cursor: pointer;

  background-color: #42b72a;
  color: #fff;
`

class App extends React.Component {
  state = {
    usuarios: [
      {
        nome: 'paulinha',
        fotoUser: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nome: 'marnand',
        fotoUser: 'https://picsum.photos/id/237/200/300',
        fotoPost: 'https://picsum.photos/200/150.jpg'
      },
      {
        nome: 'Neo',
        fotoUser: 'https://picsum.photos/200/300?grayscale',
        fotoPost: 'https://picsum.photos/200/150/?blur=2'
      }
    ],

    inputNome: '',
    inputFotoUser: '',
    inputFotoPost: ''
  }

  novoRegistro = () => {
    const novoUsuario = {
      nome: this.state.inputNome,
      fotoUser: this.state.inputFotoUser,
      fotoPost: this.state.inputFotoPost
    }

    const novosUsuarios = [...this.state.usuarios, novoUsuario]

    this.setState({ usuarios: novosUsuarios })
  }

  pegaUsuario = (event) => {
    this.setState({ inputNome: event.target.value })
  }

  pegaFotoUser = (event) => {
    this.setState({ inputFotoUser: event.target.value })
  }

  pegaPost = (event) => {
    this.setState({ inputFotoPost: event.target.value })
  }

  render() {

    const listaUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <Post
          nomeUsuario={usuario.nome}
          fotoUsuario={usuario.fotoUser}
          fotoPost={usuario.fotoPost}
        />
      )
    })

    return (
      <div className={'app-container'}>
        <div>

          <Format>
            <Finput value={this.state.inputNome} onChange={this.pegaUsuario} placeholder={'Nome'} />
            <Finput value={this.state.inputFotoUser} onChange={this.pegaFotoUser} placeholder={'Foto de perfil'} />
            <Finput value={this.state.inputFotoPost} onChange={this.pegaPost} placeholder={'Post'} />
            <Fbutton onClick={this.novoRegistro}>Adicionar</Fbutton>
          </Format>

          {listaUsuarios}
        </div>
      </div>
    )
  }
}

export default App;
