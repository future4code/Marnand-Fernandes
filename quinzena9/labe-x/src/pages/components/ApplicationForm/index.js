import Axios from 'axios';
import React from 'react';
import { useForm } from '../hooks/useForm';
import { useTripsList } from '../hooks/useTripsList';

const ApplicationForm = () => {
  const trips = useTripsList();
  const [form, onChangeInput] = useForm({
    name: '',
    age: 0,
    applicationText: '',
    profession: '',
    country: '',
    trip: null
  });

  const onSubmitApplication = (e) => {
    e.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
  }
    Axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marnand-tang/trips/${form.trip}/apply`, body)
  }

  return (
    <div>
      <h1>Application Form</h1>

      <form onSubmit={onSubmitApplication}>
        <div>
          <input name={'name'} value={form['name']} onChange={onChangeInput} placeholder={"NOME"} />
        </div>
        <div>
          <input name={'age'} value={form['age']} onChange={onChangeInput} type={'number'} placeholder={"IDADE"} />
        </div>
        <div>
          <input name={'applicationText'} value={form['applicationText']} onChange={onChangeInput} placeholder={"TEXTO DA APLICAÇÃO"} />
        </div>
        <div>
          <input name={'profession'} value={form['profession']} onChange={onChangeInput} placeholder={"PROFISSÃO"} />
        </div>
        <div>
          <select name={'country'} value={form['country']} onChange={onChangeInput} placeholder={"PAÍS"}>
            <option></option>
            <option>Brasil</option>
            <option>Argentina</option>
            <option>Uruguai</option>
          </select>
        </div>
        <div>
          <select name={'trip'} value={form['trip']} onChange={onChangeInput}>
            <option>Viagem</option>
            {trips.map((trip) => { return <option value={trip.id}>{trip.name}</option> })}
          </select>
        </div>

        <button type={'submit'}>Criar</button>
      </form>

    </div>
  );
}

export default ApplicationForm;
