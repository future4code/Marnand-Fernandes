import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const goToTripsList = () => {
    history.push("/trips/list");
  }

  const goToLogin = () => {
    history.push("/login");
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToTripsList}>Lista de viagens</button>
      <button onClick={goToLogin}>Acesso Restrito</button>
    </div>
  );
};

export default Home;