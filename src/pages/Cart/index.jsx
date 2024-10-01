import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeItem, clearCart, updateItemQuantity } = useContext(CartContext);

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity > 0) {
            updateItemQuantity(id, newQuantity);
        }
    };

    const calculateTotal = () => {
        const total = cartItems.reduce((total, item) => total + item.sale_price * item.quantity, 0);
        return Number(total.toFixed(2));
    };

    return (
        <section className="cart">
            <h1>Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>No tiene productos en el carrito</p>
                    <Link to="/tienda">Volver a la tienda</Link>
                </div>
            ) : (
                <div className="cart-item__container">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={`/img${item.img?.front}`} alt={item.wine_name} className="cart-item__img" />
                            <div className="cart-item__details">
                                <h3>{item.wine_name}</h3>
                                <p>Precio: ${item.sale_price}</p>
                                <div className="cart-item__quantity">
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <button onClick={() => removeItem(item.id)}>Eliminar</button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <h2>Total de la compra: ${calculateTotal()}</h2>
                        <button className="cart-summary__clearbtn" onClick={clearCart}>Vaciar Carrito</button>
                        <Link to="/Checkout">
                            <button type="submit" className="cart-summary__checkoutbtn">Confirmar Compra</button>
                        </Link>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Cart;
