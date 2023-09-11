import { Component } from "react";
import './ButtonCount.css'


class ButtonCount extends Component  {
    state = {
        counts: 1,
        plus: '+',
        minus: '-'
    }
    

    add = () => {
        this.setState(state => ({
            counts: state.counts + 1
        }))
        console.log(this.state.counts)
    }
    
    minus = () => {
        if (this.state.counts > 1) {
            this.setState(state => ({
                counts: state.counts - 1
            }))
            console.log(this.state.counts)
        }
    }
     
    render() {

        return (
            <div className="count_products">
            <button className="minus" onClick={this.minus}>
              {this.state.minus}
            </button>
            <div className="count_calc">{this.state.counts}</div>
            <button className="plus" onClick={this.add}>
              {this.state.plus}
            </button>
            <div className="costs"><span>Общая стоимость</span>{this.state.counts*this.props.cost}<span className="rub">руб</span></div>
          </div>
          );
    }

}

export default ButtonCount 