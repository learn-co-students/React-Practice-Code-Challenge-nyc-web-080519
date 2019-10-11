import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet';
import { timingSafeEqual } from 'crypto';

// Endpoint!
const API = "http://localhost:3000/sushis"

//using a class component since we need to use state and componentDidMount in App
class App extends Component {
  //storing array of sushi and an array of the eatenSushi in state
  state = {
    sushis: [],
    eatenSushis: [],
    money: 100
  }

  //using component did mount so we fetch all of the sushi immediately after our first render
  componentDidMount() {
    fetch("http://localhost:4000/sushis")
    .then(resp => resp.json())
    //storing sushis from fetch in state, setState triggers a rerender
    .then(sushis => this.setState({sushis: sushis}))
  }

  //on click of a sushi, add sushi to eaten list and update eatenSushis in state
  sushiClickHandler = (sushi) => {
    //calculate how much money user has left
    let newMoney = this.state.money - sushi.price
    //only eat sushi, if user has enough money
    if (newMoney >= 0) {
      //making a copy of eatenSushis since we don't want to update state directly, and adding our newly eaten sushi
      let newEatenSushis = [...this.state.eatenSushis, sushi]
      this.setState({
        eatenSushis: newEatenSushis,
        money: newMoney
      })
    }
  }

  submitMoneyHandler = (newMoney) => {
    this.setState({
      money: this.state.money + parseInt(newMoney)
    })
  }

  render() {
    return (
      <div className="app">
        {/* show loading until we fetched sushis to render */}
        {/* passing sushis, eatenSushis, and both click handler functions as props to SushiContainer */}
        {this.state.sushis.length > 0 ? <SushiContainer sushis={this.state.sushis} moreClickHandler={this.moreClickHandler} sushiClickHandler={this.sushiClickHandler} eatenSushis={this.state.eatenSushis} /> : <h1>Loading</h1>}
        {/* passing eatenSushis array from App state as a prop to table */}
        <Table eatenSushis={this.state.eatenSushis} money={this.state.money} />
        <SushiWallet submitMoneyHandler={this.submitMoneyHandler} />
      </div>
    );
  }
}

export default App;