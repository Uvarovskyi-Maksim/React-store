import React from 'react';
import ButtonCount from '../helpComponent/ButtonCount';
import './Cart.css'

const Cart = ({ cart, removeFromCart }) => {
    return (
      <div className="cart">
        <h2>Корзина</h2>
        {cart.length === 0 ? (
          <p>Корзина пуста.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className='cart-item '>
                
                {item.title} - Кол-во: {item.counts} - {item.totalCost} руб.
                <button onClick={() => removeFromCart(index)}>Удалить</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  


export default Cart;