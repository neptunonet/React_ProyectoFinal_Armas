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


// import { Link } from 'react-router-dom';
// import CartWidget from '../CartWidget';

// const Menu = () => {
//   return (
//     <nav>
//       <menu>
//         <li><Link to="/">Inicio</Link></li>
//         <li><Link to="/tienda">Tienda</Link></li>
//         <li><Link to="/contacto">Contacto</Link></li>
//         <li>
//           <CartWidget />
//         </li>
//       </menu>
//     </nav>
//   );
// };

// export default Menu;

// import { NavLink } from "react-router-dom";

// const Menu = ({links, className, children}) => {

//   return (
//     <menu className={`menu ${className}__menu`}>
//       { links.map((link, i) => {
//         return (
//           <li key={`navlink-${i}`} className={`menu__item ${className}__item`}>
//             <NavLink to={link.href}>{link.label}</NavLink>
//           </li>
//         )
//       }) }
//       { children }
//     </menu>
//   );
// };

// export default Menu;