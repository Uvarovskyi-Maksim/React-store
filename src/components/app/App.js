import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from '../MainPage/MainPage'
import CatalogPageMain from '../CatalogPageMain/CatalogPageMain';
import { render } from '@testing-library/react';
import CartPage from '../CartPage/CartPage';


function App() {
  
  return (
    
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/catalog" element={<CatalogPageMain/>} />
        <Route path="/cart" element={<CartPage/>}/>

      </Routes>
    </Router>
   
  );

}
export default App;