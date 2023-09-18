import { Component } from "react";
import './CatalogList.css'
import { render } from "@testing-library/react";
import { Link } from 'react-router-dom';
import data from '../../services/data.json'

class CatalogList extends Component {

    state = {
        catalogList: []
    }

    renderItems = (arr) => {
        const items = arr.map((item) => {
            return (
                <div className="product">
                <Link to={"/catalog"}>
               
                    <div className="for_img">
                    <img className="img" src={item.img} alt="" />
                    </div>
                    
                    <div className="title">{item.title}</div>
                    <div className="count">{item.count}</div>
                
                </Link>
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