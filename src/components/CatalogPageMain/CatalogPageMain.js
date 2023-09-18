import { Component } from 'react';
import Header from '../header/AppHeader';
import CatalogMenu from '../CatalogMenu/CatalogMenu';
import Footer from '../Footer/Footer';
import ProductsList from '../CatalogMenu/CatalogMenu';


class CatalogPageMain extends Component{
    
    render(){
        return( 
          <div>
            <ProductsList />
            <Footer/>
            </div>
        )
    }
}
export default CatalogPageMain;