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

class MainPage extends Component {
  render() {
    const images = [Slide1, Slide2]
    const imageSize = {
      width: '50%', 
      height: '500px',
      
    };
    return (
      <div>
        <Header></Header>
        <Slider images={images} imageSize={imageSize}></Slider>
        <CatalogList></CatalogList>

        <div className='container'>
        <button className='all_catalogy'><span>Смотреть всё</span></button>
        </div>
        <div className='container'>
        <div className='best_txt'>Лучшие предложения</div>
       </div>
       <TopList></TopList>
       <AllContent/>
       <div className='container'>
        <button className='all_catalogy'><span>Подробности</span></button>
        </div>
        <Footer/>
      </div>


    )
  }
}

export default MainPage;
