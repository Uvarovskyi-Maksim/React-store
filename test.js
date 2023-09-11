import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

const styleField = {
  width: '300px'
}

const Text = () => {
  return <h2>Hello World</h2>
}

const Field = () => {
  return <input placeholder='Type here' type='text' style={styleField} />
}

function Btn() {

  const res = () => {
    return "Log IN"
  }
  return <button>{res()}</button>
}





class WhoAMI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++'
    }
  }


  nextYear = ()=>{
    this.setState(state =>({
        years: state.years + 1
    }))
  }


  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }

}

function App() {
  return (
    <div className="App">
      <WhoAMI name={'John'} surname='Smith' link='facebook.com' />
      <WhoAMI name={'John'} surname='Smith' link='facebook.com' />

    </div>
  );
}

export default App;
