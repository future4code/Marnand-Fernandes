import React from 'react';
import { Link } from 'react-router-dom';
import { useTripsList } from '../hooks/useTripsList';


const ListTrips = () => {
  const trips = useTripsList();
  
  return (
    <div>
      <h1>List Trips</h1>

      <ul>
        {trips.map((trip) => {return <li><Link to={"/viagem/detalhes"}>{trip.name}</Link></li>})}
      </ul>
      
      <div>
      <Link to={"/candidatarse"}>
        <button>Cadastrar na viagem</button>
      </Link>
      </div>
    </div>
  );
};

export default ListTrips;
