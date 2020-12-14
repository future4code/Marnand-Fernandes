import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ContainerProfile from './styled';

function PhotoCard() {
  const [profile, setProfile] = useState(undefined);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    Axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marnand/person")
    .then(response => {
      setProfile( response.data.profile );
    })
    .catch(error => {
      console.log(error.message);
    });
  }

  const choice = (param) => {
    const body = {
      id: profile.id,
      choice: param
    }
    setProfile(undefined);

    Axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marnand/choose-person', body)
    .then(response => {
      getProfile();
    })
  }

  const match = () => {
    choice(true);
  }

  const noMatch = () => {
    choice(false);
  }

  const clean = () => {
    Axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marnand/clear')
    .then(response => {
      console.log(response)
    })
  }

  return (
    <ContainerProfile>
      <main>
        {
        profile ? 
        (<>
          <article>
            <h2>{profile.name}, {profile.age}</h2>
            <p>{profile.bio}</p>
          </article>
          
          <img src={profile.photo} /> 
        </>) : <p>Carregando...</p>
        }
      </main>
      <div>
        <button onClick={noMatch}>X</button>
        <button onClick={match}>♥️</button>
      </div>
      <span onClick={clean}>Limpar</span>
    </ContainerProfile>
  )
}

export default PhotoCard;
