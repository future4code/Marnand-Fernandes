import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import List from './styled';

function Matches() {
  const [profileMatches, setProfileMatches] = useState([]);

  useEffect(() => {
    getProfileMatches();
  }, []);

  const getProfileMatches = () => {
    Axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marnand/matches")
    .then(response => {
      setProfileMatches( response.data.matches );
    })
    .catch(error => {
      console.log(error.message);
    });
  }

  return (
    <List>
      {profileMatches.map(match => {
        return (
        <p>
          <img src={match.photo} />
          {match.name}
        </p>
        );
      })}
    </List>
  )
}

export default Matches;
