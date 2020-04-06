import React, { useEffect, useState } from 'react';

import api from './services/api';

import Loading from './components/Loading';
import Header from './components/Header';

import './global.css';

import * as Style from './style';

function App() {
	const [loading, setLoading] = useState(true);
	const [pokemons, setPokemons] = useState([]);
	const [favorite, setFavorite] = useState([]);

	const loadPokemons = async () => {
		const allPokemons = [];
		try {
			for (let i = 1; i <= 150; i++) {
				await allPokemons.push(api.get(`${i}`).then((res) => res.data));
			}

			Promise.all(allPokemons).then((pokemons) => {
				setPokemons(pokemons);
				setTimeout(() => {
					setLoading(false);
				}, 500);
			});
		} catch (err) {
			setLoading(false);
			console.log('caiu no erro');
		}
	};

	const getPokemon = (pokemon) => {
		const favoriteIds = favorite.map((pokemon) => {
			return pokemon.id;
		});

		if (favorite.length >= 6 && !favoriteIds.includes(pokemon.id) ) {
			alert('Você pode escolher apenas 6 pokémons.');
		} else if (favoriteIds.includes(pokemon.id)) {
			setFavorite(
				favorite.filter((item) => {
					return pokemon.id !== item.id;
				})
			);
		} else {
			setFavorite([...favorite, pokemon]);
		}
	};

	useEffect(() => {
		loadPokemons();
	}, []);

	return (
		<>
			{loading && <Loading />}

			{pokemons && (
				<>
					<Header displayPoke={pokemons && true} favorites={favorite} removeFavorite={getPokemon}/>

					<Style.Container>
						<div className="container">
							<ul>
								{pokemons.map((pokemon) => (
									<li key={pokemon.id}>
										<img
											async
											src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
											alt={pokemon.name}
										/>
										<p>{pokemon.name}</p>
										<button onClick={() => getPokemon(pokemon)}>Capturar</button>
									</li>
								))}
							</ul>
						</div>
					</Style.Container>
				</>
			)}
		</>
	);
}

export default App;
