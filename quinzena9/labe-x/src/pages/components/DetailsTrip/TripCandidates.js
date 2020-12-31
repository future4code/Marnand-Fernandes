import React from 'react';
import { Link } from 'react-router-dom';

const TripCandidates = () => {
  return (
    <div>
      <h1>Trip Candidates</h1>
      Candidato 1 <button>sim</button><button>não</button>
      Candidato 2 <button>sim</button><button>não</button>
      Candidato 3 <button>sim</button><button>não</button>

      <div>
        <Link to={"/viagens/adm"}>
          <button>Gerir</button>
        </Link>
      </div>  
    </div>
  );
};

export default TripCandidates;