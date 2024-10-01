import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';

const Menu = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__menu">
        <li className="main-nav__item"><Link to="/" className="main-nav__link">Inicio</Link></li>
        <li className="main-nav__item"><Link to="/tienda" className="main-nav__link">Tienda</Link></li>
        <li className="main-nav__item"><Link to="/contacto" className="main-nav__link">Contacto</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Menu;
