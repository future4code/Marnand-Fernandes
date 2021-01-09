import Axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useProtect } from '../hooks/useProtect';

const CreateTrip = () => {
  const history = useHistory();
  useProtect();

  const [form, onChangeInput] = useForm({
    name: '',
    planet: '',
    description: '',
    duration: ''
  });

  const [date, setDate] = useState(new Date());

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formatDate = `${date.target.valueAsDate.getDate() + 1}/${date.target.valueAsDate.getMonth() + 1}/${date.target.valueAsDate.getFullYear()}`
    //console.log(form)
    //console.log(formatDate)

    const body = {
        "name": form.name,
        "planet": form.planet,
        "date": formatDate,
        "description": form.description,
        "durationInDays": form.duration
    }

    Axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/marnand-tang/trips', body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((res) => { history.push('/viagens') })
  }

  return (
    <div>
      <h1>CreateTrip Page</h1>

      <form onSubmit={onSubmitForm}>
        <div>
          <input name={'name'} value={form['name']} onChange={onChangeInput} placeholder={"NOME"} />
        </div>
        <div>
          <input name={'planet'} value={form['planet']} onChange={onChangeInput} placeholder={"PLANETA"} />
        </div>
        <div>
          <input onChange={date => setDate(date)} type={'date'} />
        </div>
        <div>
          <input name={'description'} value={form['description']} onChange={onChangeInput} placeholder={"DESCRIÇÃO"} />
        </div>
        <div>
          <input name={'duration'} value={form['duration']} onChange={onChangeInput} type={"number"} placeholder={"DURAÇÃO EM DIAS"} />
        </div>

        <button type={'submit'}>Criar</button>
      </form>
      
    </div>
  );
};

export default CreateTrip;
