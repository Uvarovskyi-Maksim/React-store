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




return (
  <div className="header">
      <div className="header_line">
          <div className="container">
              <div className="head">
                  <div className="nav">
                      <ul className="navigation">
                          <li><a href="">О компании</a></li>
                          <li><a href="">Доставка</a></li>
                          <li><a href="">Гарантия</a></li>
                          <li><a href="">Контакты</a></li>
                      </ul>
                  </div>
                  <div className="header_whatsapp_link">
                      <img className="whatsapp_img" src={whatsappLogo} alt="" />
                      <span className="whatsapp_link"><a href="">Пишите, мы онлайн!</a></span>
                  </div>
                  <div className="header_phone">
                      <svg class="" width="5" height="13" viewBox="0 0 5 13"><path class="cls-phone" d="M785.738,193.457a22.174,22.174,0,0,0,1.136,2.041,0.62,0.62,0,0,1-.144.869l-0.3.3a0.908,0.908,0,0,1-.805.33,4.014,4.014,0,0,1-1.491-.274c-1.2-.679-1.657-2.35-1.9-3.664a13.4,13.4,0,0,1,.024-5.081c0.255-1.316.73-2.991,1.935-3.685a4.025,4.025,0,0,1,1.493-.288,0.888,0.888,0,0,1,.8.322l0.3,0.3a0.634,0.634,0,0,1,.113.875c-0.454.8-.788,1.37-1.132,2.045-0.143.28-.266,0.258-0.557,0.214l-0.468-.072a0.532,0.532,0,0,0-.7.366,8.047,8.047,0,0,0-.023,4.909,0.521,0.521,0,0,0,.7.358l0.468-.075c0.291-.048.4-0.066,0.555,0.207h0Z" transform="translate(-782 -184)"></path></svg>
                      <span className="phone_number">+7 929 838-80-51</span>
                      <span className="request_call"><a href="">Заказать звонок</a></span>
                  </div>
                  <div className="log_in">
                      <svg class="" width="18" height="18" viewBox="0 0 18 18"><path data-name="Ellipse 206 copy 4" class="cls-1" d="M909,961a9,9,0,1,1,9-9A9,9,0,0,1,909,961Zm2.571-2.5a6.825,6.825,0,0,0-5.126,0A6.825,6.825,0,0,0,911.571,958.5ZM909,945a6.973,6.973,0,0,0-4.556,12.275,8.787,8.787,0,0,1,9.114,0A6.973,6.973,0,0,0,909,945Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,909,955Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,909,949Z" transform="translate(-900 -943)"></path></svg>
                      <a href=""> <span className="log">Войти</span></a>
                  </div>
              </div>
          </div>
      </div>
      <div className="container">
          <div className="mid_line">
              <div className="logo">
                  <img className="logo_img" src={siteLogo} alt="" />
              </div>
              <div className="catalog_button">
                  <div className="catalog_elem">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 10 10"><path data-name="Rounded Rectangle 969 copy 7" class="cls-1" d="M644,76a1,1,0,1,1-1,1A1,1,0,0,1,644,76Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,648,76Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,652,76Zm-8,4a1,1,0,1,1-1,1A1,1,0,0,1,644,80Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,648,80Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,652,80Zm-8,4a1,1,0,1,1-1,1A1,1,0,0,1,644,84Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,648,84Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,652,84Z" transform="translate(-643 -76)"></path></svg>
                      <span className="catalog_txt">Каталог</span>
                  </div>
              </div>
              <div className="d1">
                  <form className="search_form" action="">
                      <input type="text" placeholder="Искать здесь..." />
                      <button type="submit"></button>
                  </form>
              </div>

              <div className="like_basket">
                  <span className="js-basket-block">
                      <i className="like" aria-hidden="true" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><path data-name="Ellipse 270 copy 3" class="clsw-1" d="M682.741,81.962L682.75,82l-0.157.142a5.508,5.508,0,0,1-1.009.911L675,89h-2l-6.5-5.9a5.507,5.507,0,0,1-1.188-1.078l-0.057-.052,0-.013A5.484,5.484,0,1,1,674,75.35,5.485,5.485,0,1,1,682.741,81.962ZM678.5,75a3.487,3.487,0,0,0-3.446,3H675a1,1,0,0,1-2,0h-0.054a3.491,3.491,0,1,0-5.924,2.971L667,81l7,6,7-6-0.023-.028A3.5,3.5,0,0,0,678.5,75Z" transform="translate(-664 -73)"></path></svg></i>								<span class="title dark_link"></span>
                      <span className="count_block"><span className="count">0</span></span>
                  </span>
                  <span className="js-basket-block" onClick={this.renderCart}>
                      <i className="svg inline  svg-inline-basket big" aria-hidden="true"><svg class="" width="19" height="16" viewBox="0 0 19 16"><path data-name="Ellipse 2 copy 9" class="cls-1" d="M956.047,952.005l-0.939,1.009-11.394-.008-0.952-1-0.953-6h-2.857a0.862,0.862,0,0,1-.952-1,1.025,1.025,0,0,1,1.164-1h2.327c0.3,0,.6.006,0.6,0.006a1.208,1.208,0,0,1,1.336.918L943.817,947h12.23L957,948v1Zm-11.916-3,0.349,2h10.007l0.593-2Zm1.863,5a3,3,0,1,1-3,3A3,3,0,0,1,945.994,954.005ZM946,958a1,1,0,1,0-1-1A1,1,0,0,0,946,958Zm7.011-4a3,3,0,1,1-3,3A3,3,0,0,1,953.011,954.005ZM953,958a1,1,0,1,0-1-1A1,1,0,0,0,953,958Z" transform="translate(-938 -944)"></path></svg></i>																<span class="title dark_link"></span>
                      <span className="count_block"><span className="count">0</span></span>
                  </span>
              </div>
          </div>
      </div>
  </div>

)