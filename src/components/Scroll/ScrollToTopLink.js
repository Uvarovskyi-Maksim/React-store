import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const ScrollToTopLink = ({ to, children }) => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Прокручиваем страницу вверх
  };

  return (
    <RouterLink to={to} onClick={handleClick}>
      {children}
    </RouterLink>
  );
};

export default ScrollToTopLink;
