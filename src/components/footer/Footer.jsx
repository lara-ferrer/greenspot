import './footer.scss';
import '../../styles/index.scss';
import logo from '../../assets/brand/logo-white.svg';

const Footer = () => {
  return (
    <nav className="grsp__footer">
        <img src={logo} alt="Greenspot" />
    </nav>
  );
}

export default Footer;
