import React from 'react';
import { Link } from 'react-router-dom';

const CompraConfirmada = () => {
  return (
    <div>
      <h1>¡Compra Confirmada!</h1>
      <p>Gracias por tu compra. Recibirás un correo electrónico con los detalles de tu pedido.</p>
      <Link to="/tienda">
        <button>Volver a la Tienda</button>
      </Link>
    </div>
  );
};

export default CompraConfirmada;