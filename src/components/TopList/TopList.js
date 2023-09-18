import { Component } from "react";

import './TopList.css'
import { render } from "@testing-library/react";
import RenderStar from "../helpComponent/Stars";
import ButtonCount from "../helpComponent/ButtonCount";
import CostCalc from "../CostCalc/CostCalc";
import data from '../../services/data.json'


class TopList extends Component {

    state = {
        catalogList: [],
        count: 1,
    }

    increaseCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    decreaseCount = () => {
        if (this.state.count > 1) {
            this.setState((prevState) => ({
                count: prevState.count - 1,
            }));
        }
    };

    renderItems = (arr) => {
        const items = arr.map((item) => {
            return (
                <div className="product2">
                    <div className="for_img">
                        <img className="img2" src={item.img} alt="" />
                    </div>
                    <div className="line"><hr /></div>
                    <RenderStar />

                    <div className="title2">{item.title}</div>
                    <div className="count2">
                        <span className="counting"><div class="marker"></div>{item.count}</span><span className="compatibility">{item.compatibility}</span>
                    </div>
                    <div className="cost">{item.cost + ' руб/шт'}</div>
                    <div className="add_to_cart">

                        <ButtonCount
                            count={this.state.count}
                            cost={item.cost}
                            updateCounts={(counts, totalCost) => this.setState({ counts, totalCost })} // Передаем функцию обновления данных в ButtonCount
                        />
                        
                        <div className="add"><span>В корзину</span></div>
                    </div>

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
               {this.renderItems(data.best_products)}
            </div>
        )
    }
}

export default TopList;