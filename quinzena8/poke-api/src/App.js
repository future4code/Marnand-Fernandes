import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PokeCard from './components/PokeCard';

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const changeValue = (e) => {
    setPokeName(e.target.value);
  }

  const getPokemons = () =>{
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      setPokeList( response.data.results );
      console.log(pokeList)
    })
    .catch(err => {
      console.log(err);
  });
  }

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return (
    <div className="App">
      <select onChange={changeValue}>
        <option value={""}>ESCOLHA UM POKÉMON</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>

      <p>{pokeName && <PokeCard poke={pokeName} />}</p>
    </div>
  );
}

export default App;
