import { useContext } from "react";
import { Icon } from '@iconify/react';

import { CartContext } from "../../context/cartContext";
import Pill from '../Pill';

const CartWidget = () => {

  const { cart } = useContext(CartContext);

  const quantity = cart.length > 0
    ? cart.map(item => item.quantity).reduce((acc, ant) => ant + acc)
    : 0;

  return (
    <div className='cart-widget'>
      <Pill quantity={quantity} />
      <Icon className='cart-widget__cart' icon="fa-solid:wine-glass-alt" />
    </div>
  );
};

export default CartWidget;