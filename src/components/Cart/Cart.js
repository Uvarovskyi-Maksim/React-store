import React, { Component, useEffect, useState } from 'react'; import ButtonCount from '../helpComponent/ButtonCount';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({ cart, removeFromCart, cartStyles, customH2Style, customPerexod, openBlock, hideBlock }) => {
  const [totalCost, setTotalCost] = useState(0);
  const [hover, sethover] = useState(false)
  // Вычисляем totalCost, когда меняется свойство cart
  useEffect(() => {
    const newTotalCost = cart.reduce((acc, item) => acc + item.totalCost, 0);
    setTotalCost(newTotalCost);

    // Сохраняем totalCost в localStorage
    localStorage.setItem('totalCost', newTotalCost.toString());
  }, [cart]);


  const handleRemoveFromCart = (index) => {
    // Вызовите функцию removeFromCart, чтобы удалить элемент из корзины
    removeFromCart(index);

    // Пересчитайте totalCost после удаления элемента
    const newTotalCost = cart.reduce((acc, item) => acc + item.totalCost, 0);
    setTotalCost(newTotalCost);

    // Обновите totalCost в localStorage
    localStorage.setItem('totalCost', newTotalCost.toString());
  };

  // const mouseEnter = ()=>{
  //   sethover(true)
  //   console.log("Enter")
  // }
  // const mouseLeave = ()=>{
  //   sethover(false)
  //   console.log("Leave")
  // }
  // Определение всех стилей в виде объектов
  const cartStyle = {
    position: 'absolute',
    top: '150px',
    right: '120px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '700px',
    transition: "max-height 0.3s ease",
    ...cartStyles
  };

  const h2Style = {
    fontSize: '24px',
    marginBottom: '10px',
    ...customH2Style
  };

  const ulStyle = {
    listStyle: 'none',
    padding: '0',
    maxHeight: "300px", 
    overflowY: "auto",
  };

  const cartItemStyle = {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px'
  };

  const deleteButtonStyle = {
    backgroundColor: '#ff6347',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  const deleteButtonHoverStyle = {
    backgroundColor: '#e74c3c'
  };
  const perexod = {
    display: 'block',
    ...customPerexod
  }
  return (
    <div className="cart" style={cartStyle} onMouseEnter={openBlock} onMouseLeave={hideBlock}>
      <h2 style={h2Style}>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста.</p>
      ) : (
        <ul style={ulStyle}>
          {cart.map((item, index) => (
            <li key={index} style={cartItemStyle}>

              <img src={item.img} alt="" /> {item.title} - Кол-во: {item.counts} - {item.totalCost} руб.
              <button
                onClick={() => handleRemoveFromCart(index)}
                style={deleteButtonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = deleteButtonHoverStyle.backgroundColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = deleteButtonStyle.backgroundColor;
                }}
              >
                Удалить
              </button>
            </li>
          ))}
          <p>Общая стоимость: {totalCost} руб.</p>
          <Link to={"/cart"}> <span style={perexod}>Перейти в корзину</span></Link>
        </ul>
      )}
    </div>
  );
};

export default Cart;