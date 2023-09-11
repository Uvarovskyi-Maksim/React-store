import { Component } from "react";
import './CostCalc.css'

class CostCalc extends Component {
    calculated = () =>{
        
    }
    state = {
        counts: 1
    }
    render() {
        return (
            <div className="costs_add">
                <h3>{this.props.count}</h3>
            </div>
        )
    }
}

export default CostCalc;