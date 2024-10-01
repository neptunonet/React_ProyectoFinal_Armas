import { Link } from 'react-router-dom';
import CartWidget from '../../components/CartWidget';

const Header = () => {
  const links = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Tienda',
      href: '/tienda'
    },
    {
      label: 'Contacto',
      href: '/contacto'
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">

          <ul className="navbar__links">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className="navbar__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <CartWidget quantity={0} />
        </nav>
      </div>
    </header>
  );
};

export default Header;