import React, {useEffect, useState} from 'react';

import api from './services/api';

import Loading from './components/Loading';
import Header from './components/Header';

import './global.css';

import * as Style from './style';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    loadPokemons();

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loading />}

      <Header />

      <Style.Container>
        <div className="container">
          <ul>
            {pokemons.map(pokemon => (
              <li key={pokemon.id}>
                <img
                  src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name}
                />
                <p>{pokemon.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </Style.Container>
    </>
  );
}

export default App;
