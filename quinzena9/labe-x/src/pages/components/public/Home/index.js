import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from './styled'
import rocket from '../../../../assets/icons/foguete.svg';
import planet from '../../../../assets/icons/planetas.svg';
import logo from '../../../../assets/icons/futurama.svg';

const Home = () => {
  const history = useHistory();

  const goToTripsList = () => {
    return history.push("/trips/list");
  };  

  const goToLogin = () => {
    return history.push("/login");
  };

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

      <button onClick={goToTripsList}>Lista de viagens</button>
      <button onClick={goToLogin}>Acesso Restrito</button>
    </Container>
  );
};

export default Home;