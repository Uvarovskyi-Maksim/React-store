import { Component } from "react";
import './CatalogMenu.css'

class ProductCategory extends Component{
    click = (filterValue)=>{
        this.setState({ selectedFilter: filterValue })
    }
    render(){
        const {item} = this.props
        return(
            
            <div className="product2">
                <div className="category_element">
                <img src={item.image} alt="" />
                <div>
                    <span>{item.title}</span>
                    <span>{item.count}</span>
                </div>
                </div>
            </div>
        )
    }
}

export {ProductCategory};