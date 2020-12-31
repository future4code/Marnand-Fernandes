import React from 'react';

const CreateTrip = () => {
  return (
    <div>
      <h1>CreateTrip Page</h1>

      <form>
        <div>
          <input placeholder={"NOME"} />
        </div>
        <div>
          <input placeholder={"PLANETA"} />
        </div>
        <div>
          <input type={"date"} />
        </div>
        <div>
          <input placeholder={"DESCRIÇÃO"} />
        </div>
        <div>
          <input type={"number"} placeholder={"DURAÇÃO EM DIAS"} />
        </div>

        <button>Criar</button>
      </form>
      
    </div>
  );
};

export default CreateTrip;
