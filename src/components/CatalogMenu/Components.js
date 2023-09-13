import ButtonCount from "../helpComponent/ButtonCount";
import RenderStar from "../helpComponent/Stars";
import { Component } from "react";

function Category({ name, onClick }) {
    return <div className="menu_block_element" onClick={onClick}>{name}</div>;
  }
  
  // Компонент для отображения товара
  class Product extends Component {
    state = {
      count: 1,
    };
  
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
  
    render() {
      const { item } = this.props;
  
      return (
        <div className="product2">
          <div className="for_img">
            <img className="img2" src={item.img} alt="" />
          </div>
          <div className="line">
            <hr />
          </div>
          <RenderStar />
  
          <div className="title2">{item.title}</div>
          <div className="count2">
            <span className="counting">
              <div className="marker"></div>
              {item.count}
            </span>
            <span className="compatibility">{item.compatibility}</span>
          </div>
          <div className="cost">{item.cost + ' руб/шт'}</div>
          <div className="add_to_cart">
            <ButtonCount count={this.state.count} cost={item.cost} />
            <div className="add">
              <span>В корзину</span>
            </div>
          </div>
        </div>
      );
    }
  }  
  
  export  { Category, Product };