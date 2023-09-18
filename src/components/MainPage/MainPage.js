import { Component } from 'react';


import Header from '../header/AppHeader';
import Slider from '../main/Slider';
import CatalogList from '../CatalogList/CatalogList';
import TopList from '../TopList/TopList';
import './MainPage.css'
import whatsappLogo from '../../resources/WhatsApp.svg'
import siteLogo from '../../resources/logo.png'
import AllContent from '../AllContent/AllContent';
import Footer from '../Footer/Footer';
import Slide1 from '../../resources/slide1.png'
import Slide2 from '../../resources/slide2.png'
import Cart from '../Cart/Cart';

class MainPage extends Component {

  state = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    isBlockVisible: true
  }



  addToCart = (item) => {
    const updatedCart = [...this.state.cart];
    updatedCart.push(item);
    this.setState({ cart: updatedCart });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };


  removeFromCart = (index) => {
    const updatedCart = [...this.state.cart];
    updatedCart.splice(index, 1);
    this.setState({ cart: updatedCart });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  toggleBlockVisibility = () => {
    this.setState({ isBlockVisible: !this.state.isBlockVisible });
    console.log('HELLO')
};

  render() {
    const imagess = [Slide1, Slide2]
    const imageSize = {
      width: '50%',
      height: '500px',

    };

    return (
      <div>
        <Header cart={this.state.cart} toggleBlockVisibility={this.toggleBlockVisibility} />
        {this.state.isBlockVisible && <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} />}
        <Slider images={imagess} imageSize={imageSize}></Slider>
        <CatalogList></CatalogList>

        <div className='container'>
          <button className='all_catalogy'><span>Смотреть всё</span></button>
        </div>
        <div className='container'>
          <div className='best_txt'>Лучшие предложения</div>
        </div>
        <TopList></TopList>
        <AllContent />
        <div className='container'>
          <button className='all_catalogy'><span>Подробности</span></button>
        </div>
        <Footer />
      </div>


    )
  }
}

export default MainPage;
