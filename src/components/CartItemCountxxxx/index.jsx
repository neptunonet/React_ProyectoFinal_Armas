import { useState } from "react"

const CartItemCounter = ({ initialQueantity, stock, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initialQueantity);

    const handleIncrease = () => {
        if (quantity < stock) {
            const newQuantity = quantity +1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    return (
        <div className="cart-item-counter">
            <button type="button" onClick={handleDecrease} className="">-</button>
            <span className="">{quantity}</span>
            <button type="button" onClick={handleIncrease} className="">+</button>
        </div>
    );
};

export default CartItemCounter;
