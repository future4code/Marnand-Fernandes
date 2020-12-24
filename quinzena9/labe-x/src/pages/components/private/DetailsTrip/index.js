import React from 'react';
import { useHistory } from 'react-router-dom';

const DetailsTrip = () => {
  const history = useHistory();

  const goToManage = () => {
    history.push("/trips/manage");
  }
  
  return (
    <div>
      <h1>DetailsTrip Page</h1>
      <button onClick={goToManage}>Gerir</button>
    </div>
  );
};

export default DetailsTrip;
