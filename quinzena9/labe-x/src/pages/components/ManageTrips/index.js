import React from 'react';
import { Link } from 'react-router-dom';
import { useProtect } from '../hooks/useProtect';

const ManageTrips = () => {
  useProtect();
  
  return (
    <div>
      <h1>Management Page</h1>

      <div>
        <Link to={"/viagem/adm/criar"}>
          <button>Criar viagem</button>
        </Link>
      </div>
    </div>
  );
};

export default ManageTrips;