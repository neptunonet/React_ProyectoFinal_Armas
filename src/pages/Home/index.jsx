import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <h1>Bienvenidos a Viñedos del Valle</h1>
        <p>Descubre la excelencia en cada botella</p>
      </section>

      <section className="featured-wines">
        <h2>Nuestras Bodegas</h2>
        <div className="wine-grid">
          {/* Aquí puedes agregar algunos de tus vinos destacados */}
          <div className="wine-card">
            <img src="/img/bodega.webp" alt="Nuestra bodega Neuquen" />
            <h3>Neuquen - Rio Colorado</h3>
            <p>Propicio para un tinto robusto con notas de frutas negras y especias</p>
          </div>
          <div className="wine-card">
            <img src="/img/bodega2.jpeg" alt="Nuestra bodega Salta" />
            <h3>Salta - Cafayate</h3>
            <p>Un blanco frutado con notas de aromas dulces</p>
          </div>
          <div className="wine-card">
            <img src="/img/bodega3.jpeg" alt="Nuestra bodega La Rioja" />
            <h3>La Rioja - Tupungato</h3>
            <p>Un Pinot inconfundible</p>
          </div>
        </div>
        <Link to="/tienda" className="btn-ver-mas">Ver Todos los Vinos</Link>
      </section>

      <section className="about-us">
        <h2>Nuestra Historia</h2>
        <p>Desde 1920, Viñedos del Valle ha sido sinónimo de calidad y tradición en la elaboración de vinos argentinos. Nuestros viñedos, ubicados en el Salta, La Rioja y Neuquen, son cuidados con pasión para producir vinos excepcionales.</p>
      </section>

      <section className="visit-us">
        <h2>Visítanos</h2>
        <p>Te invitamos a conocer nuestros viñedos y bodega. Disfruta de una experiencia única con degustaciones y recorridos guiados.</p>
        <Link to="/contacto" className="btn-reservar">Reserva tu Visita</Link>
      </section>
    </main>
  );
};

export default Home;

// const Home = () => {

//   return (
//     <main className="container">
//       <h2>Home Page</h2>
//     </main>
//   );
// };

// export default Home;