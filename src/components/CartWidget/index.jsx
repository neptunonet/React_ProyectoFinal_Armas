import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { Icon } from '@iconify/react';
import Pill from '../Pill';

const CartWidget = () => {
    const { cartItems } = useContext(CartContext);

    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link to="/cart" className="cart-widget">
            <Icon className="cart-widget__icon" icon="fa-solid:wine-glass-alt"/>
            {/* {itemCount > 0 && <span className="cart-notification">{itemCount}</span>} */}
            {itemCount > 0 && <Pill className="cart-widget__pill" quantity={itemCount} />}
        </Link>
    );
};

export default CartWidget;

