import React from 'react';
import {Link} from 'react-router-dom';
import Container from './styled';
import rocket from '../../../assets/icons/foguete.svg';
import planet from '../../../assets/icons/planetas.svg';
import logo from '../../../assets/icons/futurama.svg';

const Home = () => {
  return (
    <Container>
      <header>
        <div>
          <img src={logo} />
        </div>
      </header>
      <main>
        <h1>Valores incluem</h1>
        <ul>
          <li><img src={planet} /> 7 noites de hospedagem flutuante</li>
          <li><img src={rocket} /> Translado de chegada e saída em velocidade de dobra </li>
        </ul>
      </main>
      <article>
        <section>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </article>

      <div>
      <Link to={"/candidatarse"}>
        <button>Candidatar-se a uma viagem</button>
      </Link>
      <Link to={"/acessar"}>
        <button>Acesso Restrito</button>
      </Link>
      </div>
    </Container>
  );
};

export default Home;