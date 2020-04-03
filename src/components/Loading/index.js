import React from 'react';

import * as Style from './style';

export default function Loading() {
  return (
    <Style.Loading>
      <div className="content">
        <div className="pokedex">
          <div className="top">
            <div className="camera"></div>
            <div className="lights">
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="green"></div>
            </div>
          </div>
          <div className="rect"></div>
          <div className="space">
            <div className="arrow-behind"></div>
            <div className="arrow"></div>
          </div>
          <div className="scroll">
            <div className="bar">
              <div className="square-top"></div>
              <div className="square-bottom"></div>
            </div>
          </div>
          <div className="fill"></div>
          <div className="triangle"></div>
          <div className="inverse"></div>
          <div className="end">
            <div className="strip"></div>
          </div>
        </div>
        <div className="shadow"></div>
        <div className="texto">
          <p>Carregando pokémons</p>
        </div>
        <div className="loader">
          <div className="progress"></div>
        </div>
      </div>
    </Style.Loading>
  );
}
