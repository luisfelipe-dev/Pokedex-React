import React, { useState } from 'react';

import * as Style from './style';

import Logo from '../../assets/logo.png';

export default function Header(props) {
	const { displayPoke, favorites, removeFavorite } = props;
	const [active, setActive] = useState(false);
	const [pokename, setPokeName] = useState();

	const activeClass = (pokemon) => {
		setActive(pokemon.id);
		setPokeName(pokemon);

		// setTimeout(() => {
		// 	removeFavorite(pokemon);
		// }, 2000);
	};

	const removePoke = (pokemon) => {
		setPokeName();
		removeFavorite(pokemon);
	};

	// DAR UMA LIDA NESSE CARA PARA FAZER A LISTAGEM E O EFEITO DE ACTIVE
	// https://stackoverflow.com/questions/54126640/toggle-active-state-with-hooks-react

	return (
		<div className="container">
			<Style.Header>
				<div className="logo">
					<img src={Logo} alt="Pokédex" />
				</div>

				<div className={`catch ${displayPoke ? '' : 'none'}`}>
					{pokename && (
						<div className="catch__tooltip">
							Remover Pokemon? {pokename.name}
							<button onClick={() => removePoke(pokename)}>Sim</button>
						</div>
					)}

					<div className="catch__title">
						<p>Escolha 6 Pokémons</p>

						<span className={favorites.length === 6 ? 'completed' : ''}>
							<strong>{favorites && favorites.length}</strong> / 6
						</span>
					</div>

					<div className="catch__content">
						{favorites && (
							<>
								{favorites.map((pokemon) => (
									<div
										key={pokemon.id}
										className={`item ${active === pokemon.id ? 'active' : ''}`}
										onClick={() => activeClass(pokemon)}
									>
										<img
											src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
											alt=""
										/>
										<p>{pokemon.name}</p>
									</div>
								))}
							</>
						)}
					</div>

					<div className="catch__description">
						<p>Estes são os pokémons que você levaria para uma batalha.</p>
					</div>
				</div>
			</Style.Header>
		</div>
	);
}
