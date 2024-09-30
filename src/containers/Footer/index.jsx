import Menu from "../../components/Menu";

const Footer = () => {

  const links = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Tienda',
      href: '/store'
    },
    {
      label: 'Contacto',
      href: '/contact'
    },
  ];

  return(
      <footer>
        <section className="container">

         </section>
        <p className="copy">All rights reserved &copy;</p>
    </footer>
  );
};

export default Footer;