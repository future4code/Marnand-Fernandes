import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  }

  const goToManage = () => {
    history.push("/trips/manage");
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={goToHome}>Página inicial</button>
      <button onClick={goToManage}>Gerir</button>
    </div>
  );
};

export default Login;
