import React from 'react';
import TripCandidates from './TripCandidates';
import TripInfor from './TripInfor';

const DetailsTrip = () => { 
  return (
    <div>
      <h1>DetailsTrip Page</h1>
      <br /><br /><br />

      <TripInfor />
      <TripCandidates />
    </div>
  );
};

export default DetailsTrip;
