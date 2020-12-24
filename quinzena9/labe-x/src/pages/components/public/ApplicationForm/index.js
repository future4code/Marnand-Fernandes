import React from 'react';
import { useHistory } from 'react-router-dom';

const ApplicationForm = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  }

  return (
    <div>
      <h1>Application Form</h1>
      <button onClick={goToHome}>Página inicial</button>
    </div>
  );
};

export default ApplicationForm;
