import React from 'react';
import '../../../styles/index.scss';
import { SectionTitle } from '../../molecules';

export const Section = ({ title, children }) => {
  return (
    <section className="grsp__section">
      <SectionTitle title={title} />
      { children }
    </section>
  );
}
