import './section.scss';
import '../../styles/index.scss';

const Section = ({ children }) => {
  return (
    <section className="grsp__section">
      { children }
    </section>
  );
}

export default Section;
