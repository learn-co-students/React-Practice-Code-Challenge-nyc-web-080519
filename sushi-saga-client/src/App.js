import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import AddMoneyForm from './containers/AddMoneyForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  /* we need to set the state for allSushi, where we can make 1 GET request to the API and 
       grab all of the sushi objects.
     we also need to set the budget, as well as the spot/index at the point of which we are in
       the allSushi array.  We can only render 4 sushis.
     We also need to keep track of which sushi's have been eaten
  */
  state = {
    allSushi: [],
    eaten: [],
    budget: 100,
    spot: 0
  }

  // first get request
  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      let allSushi = [...this.state.allSushi]
      allSushi = data
      this.setState({
        allSushi
      })
    })
  }

  // we need to click on the sushi we want and then eat it.
  // need to render some places and change the state for the 
  // budget
  eatClickHandler = (event) => {
    let chosenSushi = event.target.name
    let sushi = [...this.state.allSushi]
    let found = sushi.find(sushiObj => {
      return sushiObj.name === chosenSushi
    })
    let eaten = [...this.state.eaten, found]
    if(found !== undefined){
      if((this.state.budget - found.price) >= 0){
        this.setState({
          budget: this.state.budget - found.price,
          eaten
        })
        event.target.remove()
      }
    }
  }


  // we need to be able to grab more sushis when we click this button
  moreClickHandler = () => {
    let spot = this.state.spot + 4
    // once we hit 100, we set spot back to 0 and start again! 
    if(spot === 100) {
      spot = 0
    }
    console.log(spot)
    this.setState({
      spot
    })
    this.getSushi()
  }

  // this will give us an array of more sushi
  getSushi = () => {
    let currentSushi = this.state.allSushi.slice(this.state.spot, this.state.spot+4 )
    return currentSushi
  }

  updateBudget = (num) => {
    let newBudget = this.state.budget + num
    // console.log(newBudget)
    this.setState({
      budget: newBudget
    })
  }

  render() {
    let current = this.getSushi()
    return (
      <div className="app">
        <SushiContainer gone={this.state.eaten} sushi={current} eatSushi={this.eatClickHandler} moreSushi={this.moreClickHandler}/>
        <Table money={this.state.budget} count={this.state.eaten}/>   
        <AddMoneyForm update={this.updateBudget}/>
      </div>
    );
  }
}

export default App;