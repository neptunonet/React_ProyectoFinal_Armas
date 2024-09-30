import Pill from '../Pill';
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  console.log('CartWidget - Total quantity:', totalQuantity);
  console.log('CartWidget - Cart items:', cartItems);

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <div className="cart-widget" onClick={handleClick}>
      <div className="cart-widget__icon-container">
        <Icon className="cart-widget__icon" icon="fa-solid:wine-glass-alt" />
        {totalQuantity > 0 && <Pill className="cart-widget__pill" quantity={totalQuantity} />}
      </div>
    </div>
  );
};

export default CartWidget;



// import Pill from '../Pill';
// import { useContext } from "react";
// import { CartContext } from "../../context/cartContext";
// import { Link } from 'react-router-dom';
// import { Icon } from '@iconify/react';


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