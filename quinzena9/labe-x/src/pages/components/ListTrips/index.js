import React from 'react';
import { Link } from 'react-router-dom';
import { useProtect } from '../hooks/useProtect';
import { useTripsList } from '../hooks/useTripsList';


const ListTrips = () => {
  const trips = useTripsList();
  useProtect();
  
  return (
    <div>
      <h1>List Trips</h1>

      <ul>
        {trips.map((trip) => {return <li><Link to={`/viagem/detalhes/${trip.id}`}>{trip.name}</Link></li>})}
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
