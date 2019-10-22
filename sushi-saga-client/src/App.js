import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    sushiEaten: [],
    start: 0,
    budget: 100
  }


  sushiClickHandler = (event) => {
    this.setState({start: (this.state.start + 4)})

  }

  buySushi = (sushiObj) => {
    sushiObj.img_url = null
    if (this.state.budget > sushiObj.price) {
    this.setState({
        sushiEaten: [...this.state.sushiEaten, sushiObj],
        budget: this.state.budget-sushiObj.price})
    }
      else { 
        alert(`Sorry, you don't have enought money to buy this sushi`)
      }
    }


  


  render() {
    return (
      <div className="app">
        <SushiContainer start={this.state.start} allSushi={this.state.sushi} clickHandler={this.sushiClickHandler} buySushi={this.buySushi}/>
        <Table budget={this.state.budget} sushiEaten={this.state.sushiEaten}/>
      </div>
    );
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({sushi: data}))
  }

}

export default App;