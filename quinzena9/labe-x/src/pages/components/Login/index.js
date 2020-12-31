import Axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

const Login = () => {
  const history = useHistory();
  const [form, onChangeInput] = useForm({
    email: '',
    pass: ''
  });

const onSubmitLogin = (e) => {
  e.preventDefault();
  const body = {
    email: form.email,
    password: form.pass
  }
  
  Axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/marnand-tang/login', body)
  .then((res) => {
    window.localStorage.setItem('token', res.data.token);
    history.push("/viagens/lista");
  })
}

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={onSubmitLogin}>
        <div>
          <input name={'email'} value={form['email']} onChange={onChangeInput} placeholder={"EMAIL"} />
        </div>
        <div>
          <input type={'password'} name={'pass'} value={form['pass']} onChange={onChangeInput} placeholder={"SENHA"} />
        </div>

        <button type={'submit'}>Acessar</button>
      </form>

    </div>
  );
};

export default Login;
