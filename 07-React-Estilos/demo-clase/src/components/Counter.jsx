import React from "react";

export default class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pepe: 'pepe',
      count: 0,
    }
  }
  
  
  componentDidUpdate(){
    console.log(this.state);
  }

  
  handleIncrement = () =>{
    this.setState({count: this.state.count + 1}); //Esta linea aumenta de uno en uno el contador
    // this.setState((state) => ({count: state.count + 1})); estas dos siguientes aumentan
    // this.setState((state) => ({count: state.count + 1})); de dos en dos el contador
  }

  handleDecrement = () =>{
    // this.setState((state) => ({count: this.state.count - 1}));
    this.setState((state) => ({count: state.count - 1})); //estas dos siguientes reducen
    this.setState((state) => ({count: state.count - 1})); //de dos en dos el contador
  }


  render() {
    return (
      <div style={{
        width: "250px",
        height: "250px",
        textAlign: "center",
        margin: "0 auto",
      }}>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <p>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </p>
        {this.state.count === 2 && <Info/>}
      </div>
    );
  }
}

class Info extends React.Component{
  componentDidMount(){
    console.log("componentDidMount");
  }

  componentWillUnmount(){
    console.log("El componente info se desmonto");
  }
  render(){
    return(
      <div>
        INFO
      </div>
    )
  }
}