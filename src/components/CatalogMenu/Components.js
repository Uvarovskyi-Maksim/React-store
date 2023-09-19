import ButtonCount from "../helpComponent/ButtonCount";
import RenderStar from "../helpComponent/Stars";
import { Component } from "react";


function Category({ name, onClick }) {
    return <div className="menu_block_element" onClick={onClick}></div>;
  }
  
  class Product extends Component {
    state = {
      counts: 1,
      totalCost: this.props.item.cost, // Инициализируем totalCost начальной стоимостью товара
    };
  
    increaseCount = () => {
      this.setState(
        (prevState) => ({
          counts: prevState.counts + 1,
          totalCost: (prevState.counts + 1) * this.props.item.cost, // Обновляем totalCost при увеличении counts
        }),
        () => this.props.updateCounts(this.state.counts, this.state.totalCost)
      );
    };
  
    decreaseCount = () => {
      if (this.state.counts > 1) {
        this.setState(
          (prevState) => ({
            counts: prevState.counts - 1,
            totalCost: (prevState.counts - 1) * this.props.item.cost, // Обновляем totalCost при уменьшении counts
          }),
          () => this.props.updateCounts(this.state.counts, this.state.totalCost)
        );
      }
    };
  
    // Функция для добавления товара в корзину с обновленными данными
    addToCart = () => {
      const { item } = this.props;
      const updatedItem = { ...item, counts: this.state.counts, totalCost: this.state.totalCost };
      this.props.addToCart(updatedItem);
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
            <ButtonCount
              count={this.state.counts}
              cost={item.cost}
              updateCounts={(counts, totalCost) => this.setState({ counts, totalCost })} // Передаем функцию обновления данных в ButtonCount
            />
            <div className="add">
              <span onClick={this.addToCart}>В корзину</span>
            </div>
          </div>
        </div>
      );
    }
  }
  

  
  export  { Category, Product };