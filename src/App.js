import React, {useEffect, useState} from 'react';

import api from './services/api';

import './global.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const loadPokemons = async () => {
    const allPokemons = [];
    try {
      for (let i = 1; i < 150; i++) {
        await allPokemons.push(api.get(`${i}`).then(res => res.data));
      }

      Promise.all(allPokemons).then(pokemons => setPokemons(pokemons));
    } catch (err) {
      console.log('caiu no erro');
    }
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>
            {pokemon.name}
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt={pokemon.name}/>
          </li>
        ))}
      </ul>
      
    </>
  );
}

export default App;
