import { createContext, useState } from "react";

export const CartContext = createContext(null);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((previousCart) =>
      previousCart.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, quantity) }
          : product
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((previousCart) =>
      previousCart.filter((product) => product.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };