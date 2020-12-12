import React from 'react';
import { useHistory } from 'react-router-dom';

const CreateTrip = () => {
  const history = useHistory();

  const goToManage = () => {
    history.push("/trips/manage");
  }

  return (
    <div>
      <h1>CreateTrip Page</h1>
      <button onClick={goToManage}>Gerir</button>
    </div>
  );
};

export default CreateTrip;
