import React from 'react';
import { useHistory } from 'react-router-dom';

const ManageTrips = () => {
  const history = useHistory();

  const goToTripsList = () => {
    history.push("/trips/list");
  }

  const goToCreate = () => {
    history.push("/trips/manage/create");
  }

  const goToDetails = () => {
    history.push("/trips/manage/details");
  }

  return (
    <div>
      <h1>Management Page</h1>
      <button onClick={goToTripsList}>Lista de viagens</button>
      <button onClick={goToCreate}>Criar viagem</button>
      <button onClick={goToDetails}>Detalhes da viagem</button>
    </div>
  );
};

export default ManageTrips;