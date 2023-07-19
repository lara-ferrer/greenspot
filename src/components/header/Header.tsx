import React from 'react';
import './header.scss';
import '../../styles/index.scss';
import { Searcher } from 'kiwi-design-system';

export const Header = () => {
  return (
    <section className="grsp__header">
      <div className="grsp__header__container">
        <h1 className="grsp__heading">Busca restaurantes veganos y únete a la revolución verde</h1>
        <Searcher placeholder="Introduce un nombre o localización" />
      </div>
    </section>
  );
}
