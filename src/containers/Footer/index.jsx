import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Footer = () => {
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

  const socialLinks = [
    { icon: 'mdi:facebook', url: 'https://facebook.com' },
    { icon: 'mdi:instagram', url: 'https://instagram.com' },
    { icon: 'mdi:twitter', url: 'https://twitter.com' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <img src="/img/branding/logo.webp" alt="Viñedos del Valle Logo" />
            </Link>
          </div>
          <nav className="footer-nav">
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <Icon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copy">&copy; {new Date().getFullYear()} Viñedos del Valle. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;