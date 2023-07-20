import { Link } from "react-router-dom";
import { Button } from "kiwi-design-system";
import './section-title.scss';
import '../../styles/index.scss';

const SectionTitle = ({ title, link }) => {
  return (
    <div className="grsp__section__title">
      <h2>{ title }</h2>
      <Link to={link}>
        <Button state="secondary" size="small" label="Ver todo" />
      </Link>
    </div>
  );
}

export default SectionTitle;
