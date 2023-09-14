import React, { useState, useEffect } from 'react';
import { Category, Product } from './Components'; // Импорт компонентов

function App() {
  const [selectedCategory, setSelectedCategory] = useState('запчасти'); // Установите "запчасти" по умолчанию

  // Здесь вы можете иметь данные о товарах, например, в виде массива объектов
  const products = [
    { name: 'Товар 1', category: 'запчасти', price: 100 },
    { name: 'Товар 2', category: 'запчасти', price: 150 },
    { name: 'Товар 3', category: 'фильтры', price: 10 },
    { name: 'Товар 4', category: 'фильтры', price: 12 },
    { name: 'Товар 5', category: 'масла', price: 8 },
    { name: 'Товар 6', category: 'масла', price: 10 },
  ];

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  // Добавьте useEffect для изменения категории при загрузке компонента
  useEffect(() => {
    setSelectedCategory('запчасти');
  }, []); // Пустой массив зависимостей означает, что этот эффект запустится только один раз при загрузке компонента

  return (
    <div>
      <div>
        {/* Кнопки категорий */}
        <Category name="запчасти" onClick={() => setSelectedCategory('запчасти')} />
        <Category name="фильтры" onClick={() => setSelectedCategory('фильтры')} />
        <Category name="масла" onClick={() => setSelectedCategory('масла')} />
      </div>

      <div>
        {/* Отображение товаров */}
        {filteredProducts.map(product => (
          <Product key={product.name} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
}

export default App;




