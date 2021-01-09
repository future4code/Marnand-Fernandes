import React from 'react';
import { Link } from 'react-router-dom';
import CandidateInfor from './CandidateInfor';

const TripCandidates = (props) => {
  return (
    <div>
      <h1>Trip Candidates</h1>

      {props.candidates.map((candidate) => { 
        return <CandidateInfor candidate={candidate} decide={props.decide} />
      })}

      <div>
        <Link to={"/viagens/adm"}>
          <button>Gerir</button>
        </Link>
      </div>  
    </div>
  );
};

export default TripCandidates;