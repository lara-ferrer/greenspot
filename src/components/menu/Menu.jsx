import './menu.scss';
import '../../styles/index.scss';
import logo from '../../assets/brand/logo-green.svg';

const Menu = () => {
  return (
    <nav className="grsp__menu">
        <img src={logo} alt="Greenspot" />
    </nav>
  );
}

export default Menu;
