import React from 'react';
import '../../../styles/index.scss';
import { SectionTitle } from '../../molecules';

export const Section = ({ title, children, link }) => {
  return (
    <section className="grsp__section">
      <SectionTitle title={title} link={link}/>
      { children }
    </section>
  );
}
