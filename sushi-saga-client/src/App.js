import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    eatenSushi: [],
    startIndex: 0,
    money: 50
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => {
      this.setState({sushi: data})
    })
  }

  moreSushiHandler = () => {
    let newObj = {...this.state}
    newObj.startIndex = newObj.startIndex + 4
    console.log(newObj)
    this.setState(newObj)
  }

  eatSushi = (e, price) => {
    if (e.target.id && price <= this.state.money) {
      const newObj = {...this.state}
      const foundSushi = this.state.sushi.find((sush) => {
        return sush.id === parseInt(e.target.id)
      })
      newObj.eatenSushi.push(foundSushi)
      newObj.money = newObj.money - parseInt(price)
      console.log(e.target)
      this.setState(newObj)
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi.slice(this.state.startIndex, this.state.startIndex + 4)} moreSushi={this.moreSushiHandler} eatenSushi={this.state.eatenSushi} eatSushi={this.eatSushi}/>
        <Table eatenSushi={this.state.eatenSushi} money={this.state.money}/>
      </div>
    );
  }
}

export default App;