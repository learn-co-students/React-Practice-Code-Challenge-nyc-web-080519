import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:6969/sushis"

class App extends Component {

  //can sushiCounter live on SushiContainer??? (It can if table doesn't need it, and the handleMoreButtonClick can move down too✅)
  state = {
    sushi: [],
    emptyPlates: [],
    money: 100
  }
  
  //render all sushis from GET fetch once component mounts
  componentDidMount() {
    this.fetchSushi() 
  }

  //GET fetch to all sushis & add isEaten key to object
  fetchSushi = () => {
    fetch(API)
    .then(resp=>resp.json())
    .then(sushis => {
      let newSushis = sushis.map(sushi => {
        sushi.isEaten = false;
        return sushi
      })
      this.setState({sushi: newSushis})
    })
  }


  eatSushi = (sushi) => {
    let sushiCopy = [...this.state.sushi]
    let moneyCopy = this.state.money
    let emptyPlatesCopy = [...this.state.emptyPlates]
    let foundSushi = sushiCopy.find(sushiObj => sushiObj === sushi)
    console.log("found sushi = ", foundSushi)

    if (moneyCopy >= foundSushi.price) {
      foundSushi.isEaten = true;
      emptyPlatesCopy.push(foundSushi);
      moneyCopy = moneyCopy - foundSushi.price
    }
    this.setState({
      sushi: sushiCopy,
      money: moneyCopy,
      emptyPlates: emptyPlatesCopy
    })
  }


  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} sushiCounter={this.state.sushiCounter} eatSushi={this.eatSushi}/>
        <Table money={this.state.money} emptyPlates={this.state.emptyPlates}/>
      </div>
    );
  }
}

export default App;