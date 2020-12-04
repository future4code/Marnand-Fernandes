import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PhotoCard() {
  const [profile, setProfile] = useState({});

  // useEffect(() => {
  //   getProfile();
  // }, [profile]);

  const getProfile = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person", {
      params: {aluno: "darvas"}
    })
    .then(response => {
      setProfile( response.data.profile );
    })
    .catch(error => {
      console.log(error.message);
    });
  }

  return (
    <div>
      {profile.bio}
    </div>
  )
}

export default PhotoCard;
