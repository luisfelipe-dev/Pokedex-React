import React, {useState} from 'react';

import * as Style from './style';

import Logo from '../../assets/logo.png';

export default function Header() {
  const [active, setActive] = useState(false);

  const activeClass = () => {
    setActive(!active);
  };
  
  // DAR UMA LIDA NESSE CARA PARA FAZER A LISTAGEM E O EFEITO DE ACTIVE
  // https://stackoverflow.com/questions/54126640/toggle-active-state-with-hooks-react

  return (
    <div className="container">
      <Style.Header>
        <div className="logo">
          <img src={Logo} alt="Pokédex" />
        </div>

        <div className="catch">
          <div className="catch__title">
            <p>Escolha 6 Pokémons</p>

            <span className="completed">
              <strong>6</strong> / 6
            </span>
          </div>

          <div className="catch__content">
            <div
              className={`item ${active ? 'active' : ''}`}
              onClick={activeClass}
            >
              <img
                src="https://pokeres.bastionbot.org/images/pokemon/1.png"
                alt=""
              />
              <p>Bulbasaur</p>
            </div>
            <div
              className={`item ${active ? 'active' : ''}`}
              onClick={activeClass}
            >
              <img
                src="https://pokeres.bastionbot.org/images/pokemon/7.png"
                alt=""
              />
              <p>Squirtle</p>
            </div>
            <div
              className={`item ${active ? 'active' : ''}`}
              onClick={activeClass}
            >
              <img
                src="https://pokeres.bastionbot.org/images/pokemon/4.png"
                alt=""
              />
              <p>Charmander</p>
            </div>
            <div
              className={`item ${active ? 'active' : ''}`}
              onClick={activeClass}
            >
              <img
                src="https://pokeres.bastionbot.org/images/pokemon/6.png"
                alt=""
              />
              <p>Charizard</p>
            </div>
            <div
              className={`item ${active ? 'active' : ''}`}
              onClick={activeClass}
            >
              <img
                src="https://pokeres.bastionbot.org/images/pokemon/115.png"
                alt=""
              />
              <p>kangaskhan</p>
            </div>
            <div
              className={`item ${active ? 'active' : ''}`}
              onClick={activeClass}
            >
              <img
                src="https://pokeres.bastionbot.org/images/pokemon/125.png"
                alt=""
              />
              <p>electabuzz</p>
            </div>
          </div>

          <div className="catch__description">
            <p>Estes são os pokémons que você levaria para uma batalha.</p>
          </div>
        </div>
      </Style.Header>
    </div>
  );
}
