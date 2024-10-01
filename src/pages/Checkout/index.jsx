import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const CompraConfirmada = () => {
  const { clearCart } = useContext(CartContext);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (!isRedirecting) {
      // Vaciar el carrito
      clearCart();
      setIsRedirecting(true);
    }
  }, [clearCart]);

  return (
    <div className="compra-confirmada">
      <h1>¡Compra Confirmada!</h1>
      <p>Gracias por tu compra. Recibirás un correo electrónico con los detalles de tu pedido.</p>
      <Link to="/" className="volver-home">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default CompraConfirmada;

// import { Link } from 'react-router-dom';


// const CompraConfirmada = () => {
//   return (
//     <div className="compra-confirmada">
//       <h1>¡Compra Confirmada!</h1>
//       <p>Gracias por tu compra. Recibirás un correo electrónico con los detalles de tu pedido.</p>
//       <Link to="/tienda" className="volver-tienda">
//         Volver a la Tienda
//       </Link>
//     </div>
//   );
// };

// export default CompraConfirmada;

