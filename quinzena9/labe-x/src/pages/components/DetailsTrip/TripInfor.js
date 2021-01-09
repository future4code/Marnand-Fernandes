import React from 'react';

const TripInfor = (props) => {
  const {name, durationInDays, description, planet, date} = props.info;

  return (
    <div>
      <h1>TripInfor</h1>

      <ul>
        <li>Nome: {name}</li>
        <li>Planeta: {planet}</li>
        <li>Data: {date}</li>
        <li>Descrição: {description}</li>
        <li>Duração em dias: {durationInDays}</li>
      </ul>
    </div>
  );
};

export default TripInfor;