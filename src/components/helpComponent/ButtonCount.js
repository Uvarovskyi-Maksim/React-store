// ButtonCount.js
import React, { Component } from "react";
import './ButtonCount.css';

class ButtonCount extends Component {
  state = {
    counts: 1,
    totalCost: this.props.cost,
    plus: '+',
    minus: '-' // Инициализируем totalCost начальной стоимостью товара
  };

  increaseCount = () => {
    this.setState(
      (prevState) => ({
        counts: prevState.counts + 1,
        totalCost: (prevState.counts + 1) * this.props.cost, // Обновляем totalCost при увеличении counts
      }),
      () => this.props.updateCounts(this.state.counts, this.state.totalCost)
    );
  };

  decreaseCount = () => {
    if (this.state.counts > 1) {
      this.setState(
        (prevState) => ({
          counts: prevState.counts - 1,
          totalCost: (prevState.counts - 1) * this.props.cost, // Обновляем totalCost при уменьшении counts
        }),
        () => this.props.updateCounts(this.state.counts, this.state.totalCost)
      );
    }
  };

  render() {
    return (
      <div className="count_products">
        <button className="minus" onClick={this.decreaseCount}>
          {this.state.minus}
        </button>
        <div className="count_calc">{this.state.counts}</div>
        <button className="plus" onClick={this.increaseCount}>
          {this.state.plus}
        </button>
        <div className="costs">
          <span>Общая стоимость</span>
          {this.state.totalCost}
          <span className="rub">руб</span>
        </div>
      </div>
    );
  }
}

export default ButtonCount;
