import React from 'react';
import { Link } from 'react-router-dom';

const ManageTrips = () => {
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