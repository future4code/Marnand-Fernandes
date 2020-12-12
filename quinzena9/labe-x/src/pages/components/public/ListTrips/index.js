import React from 'react';
import { useHistory } from 'react-router-dom';

const ListTrips = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  }

  const goToForm = () => {
    history.push("/form");
  }

  return (
    <div>
      <h1>List Trips</h1>
      <button onClick={goToHome}>Página inicial</button>
      <button onClick={goToForm}>Cadastrar na viagem</button>
    </div>
  );
};

export default ListTrips;
