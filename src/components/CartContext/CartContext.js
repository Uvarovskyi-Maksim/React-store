// CartContext.js

import React, { createContext, useContext, useState } from 'react';

// Создайте контекст
const CartContext = createContext();

// Создайте компонент-поставщик для контекста
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // Изначально корзина пуста

  // Функция для добавления товара в корзину
  
 const addToCart = (item) => {
    const updatedCart = [...cart];
    updatedCart.push(item);
    setCart( updatedCart );
};
  // Функция для удаления товара из корзины
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Создайте хук для удобного доступа к состоянию корзины
export function useCart() {
  return useContext(CartContext);
}
