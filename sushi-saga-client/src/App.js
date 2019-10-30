import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    spot: 0,
    balance: 100,
    plates: []
  }

  componentDidMount () {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({
      allSushi: data,
    }))
  }

  clickedMoreButton = () => {
    if (this.state.spot < 95) {
      this.setState({
        spot: this.state.spot + 5
      })
    } else {
      this.setState({
        spot: 0
      })
    }
  }

  eatSushi = (sushiId) => {
    let sushiToEat = this.state.allSushi.find(sushi => sushi.id === parseInt(sushiId))
    if (this.state.balance - sushiToEat.price > 0) {
      sushiToEat.img_url = null
      this.setState({
        allSushi: [...this.state.allSushi, sushiToEat],
        plates: [...this.state.plates, "plate"],
        balance: this.state.balance - sushiToEat.price
      })
    } else {
      alert("You do not have enough funds remaining.")
    }
  }

  render() {
    let sushisToDisplay = this.state.allSushi.slice(this.state.spot, this.state.spot + 4)
    return (
      <div className="app">
        <SushiContainer sushis={sushisToDisplay} clickedMoreButton={this.clickedMoreButton} eatSushi={this.eatSushi} />
        <Table plates={this.state.plates} balance={this.state.balance} />
      </div>
    );
  }
}

export default App;