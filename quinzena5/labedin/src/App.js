import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import me from './components/ativos/me.jpeg';
import facam from './components/ativos/facam.png';
import dalcar from './components/ativos/dalcar.png';
import labenu from './components/ativos/labenu.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={me}
          nome="Márnand do N. Fernandes"
          descricao="Oi, eu sou Márnand Fernandes. Sou auxiliar de CPD na faculdade FACAM. Adoro conhecer novas tecnologias para estar me aperfeiçoando cada vez mais."
        />

        <CardPequeno
          titulo="E-mail:"
          texto="meu.email@email.com"
        />

        <CardPequeno
          titulo="Endereço:"
          texto="Ribamar"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={facam}
          nome="FACAM"
          descricao="Apontando defeitos ;p"
        />

        <CardGrande
          imagem={dalcar}
          nome="Dalcar"
          descricao="Troca de oléo."
        />
      </div>

      <div className="page-section-container">
        <h2>Formação</h2>
        <CardGrande
          imagem={labenu}
          nome="Labenu"
          descricao="Curso Incrível de dev Front-End com React JS"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
