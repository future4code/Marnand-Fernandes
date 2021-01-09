import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProtect } from '../hooks/useProtect';
import TripCandidates from './TripCandidates';
import TripInfor from './TripInfor';

const DetailsTrip = () => { 
  const [trip, setTrip] = useState();
  const params = useParams();
  useProtect();
  
  const getTrips = () => {
    Axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marnand-tang/trip/${params.id}`, {
        headers: {
          auth: window.localStorage.getItem('token')
        }
      }).then((res) => {
        setTrip(res.data.trip);
      })
  } 

    useEffect(() => {
      getTrips();
    }, [])

    const decide = (approve, candidateId) => {
      const body = {
        approve: approve
      }
      Axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marnand-tang/trips/${params.id}/candidates/${candidateId}/decide`, body, {
        headers: {
          auth: window.localStorage.getItem('token')
        }
      }).then(() => {getTrips()})
    }

  return (
    <div>
      <h1>DetailsTrip Page</h1>
      <br /><br /><br />

      {trip ? 
        <>
          <TripInfor info={trip} />
          <TripCandidates 
            candidates={trip.candidates} 
            decide={decide} 
          />
        </>
      : <>carregando...</>}
    </div>
  );
};

export default DetailsTrip;
