// import { Icon } from '@iconify/react';
// import Pill from '../Pill';
// import { useContext } from "react";
// import { CartContext } from "../../context/cartContext";
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const CartWidget = () => {
  return (
    <Link to="/cart" className="cart-widget">
      <Icon icon="mdi:cart-outline" />
    </Link>
  );
};

export default CartWidget;


// const CartWidget = () => {
//   const { cartItems } = useContext(CartContext);
//   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

//   console.log('CartWidget - Total quantity:', totalQuantity);

//   const handleClick = () => {
//     navigate('/cart');
//   };

//   return (
//     <div onClick={handleClick} style={{ cursor: 'pointer' }}>
//       <Pill quantity={totalQuantity} />
//       <Icon className='cart-widget__cart' icon="fa-solid:wine-glass-alt" />
//     </div>
//   );
// };

// export default CartWidget;