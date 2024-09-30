import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    console.log('addToCart llamado con:', item, quantity);
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        console.log('Item existente encontrado:', existingItem);
        return prevItems.map(i => 
          i.id === item.id ? {...i, quantity: i.quantity + quantity} : i
        );
      }
      console.log('Añadiendo nuevo item al carrito');
      return [...prevItems, {...item, quantity}];
    });
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateItemQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item));
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeItem,
      clearCart,
      updateItemQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};