import './menu.scss';
import '../../styles/index.scss';
import logo from '../../assets/brand/logo-green.svg';

const Menu = () => {
  return (
    <nav className="grsp__menu">
        <a href="/"><img src={logo} alt="Greenspot" /></a>
    </nav>
  );
}

export default Menu;
