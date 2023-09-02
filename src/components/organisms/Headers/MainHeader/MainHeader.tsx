import React from 'react';
import { Searcher } from 'kiwi-design-system';
import './main-header.scss';
import '../../../../styles/index.scss';

export const MainHeader = () => {
  return (
    <section className="grsp__header">
      <div className="grsp__header__container">
        <h1 className="grsp__heading">Busca restaurantes veganos y únete a la revolución verde</h1>
        <Searcher placeholder="Introduce un nombre o localización" />
      </div>
    </section>
  );
}
