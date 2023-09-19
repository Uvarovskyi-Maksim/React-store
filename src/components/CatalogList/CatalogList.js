import { Component } from "react";
import './CatalogList.css'
import { render } from "@testing-library/react";
import { Link } from 'react-router-dom';
import data from '../../services/data.json'
import ScrollToTopLink from "../Scroll/ScrollToTopLink";

class CatalogList extends Component {

    state = {
        catalogList: [],
        selectedCategory: localStorage.getItem('selectedCategory')
    }
    updateCategory = (category) => {
        this.setState({ selectedCategory: category});
        localStorage.setItem('selectedCategory', category);
    };
    handleProductClick = (category) => {
        // Вызовите функцию updateCategory при нажатии на продукт
        this.updateCategory(category);
    };
    renderItems = (arr) => {
        const items = arr.map((item) => {
            return (
                <div className="product" key={item.title} onClick={() => this.handleProductClick(item.category)}>
                <ScrollToTopLink to={"/catalog"}>
               
                    <div className="for_img">
                    <img className="img" src={item.img} alt="" />
                    </div>
                    
                    <div className="title">{item.title}</div>
                    <div className="count">{item.count}</div>
                
                </ScrollToTopLink>
                </div>
            )
        })
        return (
            
            <div className="productList">{items}</div>
            
        )
    }
    
    render() {
       
       
        return (
            <div className="sectionProductList">
                {this.renderItems(data.categories_main)}
            </div>
        )
    }
}
export default CatalogList;