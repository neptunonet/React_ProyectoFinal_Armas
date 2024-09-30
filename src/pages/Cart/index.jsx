import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import CartItemCount from "../../components/CartItemCount";
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeItem, clearCart, updateItemQuantity} = useContext(CartContext);

    useEffect(() => {
        console.log('Cart - Items en el carrito:', cartItems);
    }, [cartItems]);

    const total = cartItems.reduce((acc, item) => acc + item.sale_price * item.quantity, 0);

    const handleQuantityChange = (item, newQuantity) => {
        if (newQuantity > 0) {
            updateItemQuantity(item.id, newQuantity);
        }
    };
    return (
        <section className="cart">
            <h1>Carrito de Compras</h1>
            {cartItems.length === 0 
            ?(<div>
                <p>No tiene productos en el carrito</p>
                <Link to="/tienda">Volver a la tienda</Link>
            </div>)
            : (
                <div className="cart-item__container">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <picture className="cart-item__picture">
                                <img src={`${import.meta.env.BASE_URL}${item.img}`} alt={item.title} className="cart-item__img"/>
                            </picture>
                            <div className="cart-item__details">
                                <h3>{item.wine_name}</h3>
                                <p>Precio Unitario: ${item.sale_price}</p>
                                <CartItemCount 
                                    initialQuantity={item.quantity} 
                                    stock={item.stock} 
                                    onQuantityChange={(newQuantity) => handleQuantityChange(item, newQuantity)} 
                                />
                                <p>Subtotal: ${item.sale_price * item.quantity}</p>
                            </div>
                            <button className="cart-item__deletebtn" onClick={() => removeItem(item.id)}>Eliminar</button>
                        </div>
                    ))}
                        <div className="cart-summary">
                            <h2>Total de la compra: ${total}</h2>
                            
                            <button className="cart-summary__clearbtn" onClick={clearCart}>Vaciar Carrito</button>
                            <Link to="/compra-confirmada">
                                <button type="submit" className="cart-summary__checkoutbtn"> Confirmar Compra</button>
                            </Link>
                        </div>
                </div>
            )};
        </section>
    );
};

export default Cart;
