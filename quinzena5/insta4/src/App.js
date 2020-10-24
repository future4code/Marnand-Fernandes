import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'marnand'}
          fotoUsuario={'https://picsum.photos/id/237/200/300'}
          fotoPost={'https://picsum.photos/200/150.jpg'}
        />

        <Post
          nomeUsuario={'Neo'}
          fotoUsuario={'https://picsum.photos/200/300?grayscale'}
          fotoPost={'https://picsum.photos/200/150/?blur=2'}
        />
      </div>
    );
  }
}

export default App;
