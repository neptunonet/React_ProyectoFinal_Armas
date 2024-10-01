import { createContext, useState, useEffect, useCallback } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log('CartContext - Cart items updated:', cartItems);
  }, [cartItems]);

  const addToCart = useCallback((item, quantity) => {
    console.log('Adding to cart:', item, quantity);
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prevItems, { ...item, quantity }];
    });
  }, []);

  const removeItem = useCallback((id) => {
    console.log('Removing item:', id);
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    console.log('Clearing cart');
    setCartItems([]);
  }, []);

  const updateItemQuantity = useCallback((id, newQuantity) => {
    console.log('Updating item quantity:', id, newQuantity);
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }, []);

  const contextValue = {
    cartItems,
    addToCart,
    removeItem,
    clearCart,
    updateItemQuantity
  };

  console.log('CartContext - Rendering with:', contextValue);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// export const CartContextProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     console.log('CartContext - Cart items updated:', cartItems);
//   }, [cartItems]);

//   const addToCart = (item, quantity) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(i => i.id === item.id);
//       if (existingItem) {
//         return prevItems.map(i =>
//           i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
//         );
//       }
//       return [...prevItems, { ...item, quantity }];
//     });
//   };

//   const removeItem = (id) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== id));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const updateItemQuantity = (id, newQuantity) => {
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{
//       cartItems,
//       addToCart,
//       removeItem,
//       clearCart,
//       updateItemQuantity
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// import { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartContextProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item, quantity) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(i => i.id === item.id);
//       if (existingItem) {
//         return prevItems.map(i => 
//           i.id === item.id ? {...i, quantity: i.quantity + quantity} : i
//         );
//       }
//       return [...prevItems, {...item, quantity}];
//     });
//   };

//   const removeItem = (id) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== id));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const updateItemQuantity = (id, newQuantity) => {
//     setCartItems(prevItems => 
//       prevItems.map(item => 
//         item.id === id ? {...item, quantity: newQuantity} : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{
//       cartItems,
//       addToCart,
//       removeItem,
//       clearCart,
//       updateItemQuantity
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
