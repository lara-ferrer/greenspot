import React from 'react';
import './section.scss';
import '../../styles/index.scss';
import SectionTitle from '../section-title/SectionTitle';

export const Section = ({ title, children }) => {
  return (
    <section className="grsp__section">
      <SectionTitle title={title} />
      { children }
    </section>
  );
}
