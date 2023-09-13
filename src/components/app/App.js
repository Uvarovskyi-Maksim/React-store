import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage/MainPage'
import CatalogPageMain from '../CatalogPageMain/CatalogPageMain';
import { render } from '@testing-library/react';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/catalog" element={<CatalogPageMain/>} />
      </Routes>
    </Router>
  );

}
export default App;