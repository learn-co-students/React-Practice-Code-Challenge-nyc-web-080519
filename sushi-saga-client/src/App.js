import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()

    this.state = {
      remainingSushi: [],
      currentSushi: [],
      eatenSushi: [],
      balance: 100
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushiCollection={this.state.currentSushi}
          sushiClick={this.sushiClick}
          moreClick={this.loadSushi}
          walletClick={this.addMoney}
        />
        <Table 
          eatenSushi={this.state.eatenSushi}
          balance={this.state.balance}
        />
      </div>
    )
  }
  
  walletClick = () => {
    
  }
  
  sushiClick = (id, price) => {
    this.calculateMoney(id, price)
  }

  calculateMoney = (id, price) => {
    const balance = this.state.balance - price
    if (balance >= 0) {
      this.setState({ balance })
      this.eatSushi(id)
    }
  }
  
  eatSushi = id => {
    const eatenSushi = [...this.state.eatenSushi]
    const currentSushi = this.state.currentSushi.map(sushi => {
      if(sushi.id === id){
        sushi.eaten = true
        eatenSushi.push(sushi)
      }

      return sushi
    })

    this.setState({ currentSushi, eatenSushi })
  }
  
  loadSushi = () => {
    const remainingSushi = this.state.remainingSushi
    const currentSushi = remainingSushi.splice(0,4)
    this.setState({ remainingSushi, currentSushi })
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(remainingSushi => {
      this.setState({ remainingSushi })
      this.loadSushi()
    })
  }
}

export default App;

// has to give the table $$
// has to give table number of plates

// √has to give the SushiContainer sushi