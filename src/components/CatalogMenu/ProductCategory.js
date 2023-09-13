import { Component } from "react";

class ProductCategory extends Component{
    render(){
        const {item} = this.props
        return(
            <div className="category_element">
                <img src={item.image} alt="" />
                <div>
                    <span>{item.title}</span>
                    <span>{item.count}</span>
                </div>
            </div>
        )
    }
}

export {ProductCategory};