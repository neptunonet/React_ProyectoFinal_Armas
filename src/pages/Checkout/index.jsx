import { Link } from 'react-router-dom';


const CompraConfirmada = () => {
  return (
    <div className="compra-confirmada">
      <h1>¡Compra Confirmada!</h1>
      <p>Gracias por tu compra. Recibirás un correo electrónico con los detalles de tu pedido.</p>
      <Link to="/tienda" className="volver-tienda">
        Volver a la Tienda
      </Link>
    </div>
  );
};

export default CompraConfirmada;

