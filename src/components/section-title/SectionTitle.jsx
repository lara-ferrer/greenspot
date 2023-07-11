import './section-title.scss';
import '../../styles/index.scss';
import { Button } from "kiwi-design-system";

const SectionTitle = ({ title }) => {
  return (
    <div className="grsp__section__title">
      <h2>{ title }</h2>
      <Button state="secondary" size="small" label="Ver todo" />
    </div>
  );
}

export default SectionTitle;
