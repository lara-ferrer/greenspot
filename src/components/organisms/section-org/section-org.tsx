import React from 'react';
import '../../../styles/index.scss';
import { SectionTitle } from '../../molecules/section-title/section-title';

type SectionProps = {
  title: string;
  children: any;
  link?: string;
};

export const Section = ({ title, link, children }: SectionProps) => {
  return (
    <section className="grsp__section">
      <SectionTitle title={title} link={link} />
      { children }
    </section>
  );
}
