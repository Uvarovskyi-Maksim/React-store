import { Component } from 'react';
import Header from '../header/AppHeader';
import CatalogMenu from '../CatalogMenu/CatalogMenu';
import Footer from '../Footer/Footer';



class CatalogPageMain extends Component{
    render(){
        return(
            <div>
                <Header/>
                <CatalogMenu/>
                <Footer/>
            </div>
        )
    }
}
export default CatalogPageMain;