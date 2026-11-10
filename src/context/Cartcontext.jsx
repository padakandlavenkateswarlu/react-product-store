import React, { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((previousCart) => {
      return [...previousCart, product];
    });
  };

  const removeFromCart = (id) => {
    setCart((previousCart) => {
      return previousCart.filter((product) => product.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };