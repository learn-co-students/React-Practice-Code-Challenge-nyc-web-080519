import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi:[],
    counter: 0, 
    funds: 100,
    plates: []
  }
  
  eatSushi = (event) => {
    let allSushi = this.state.sushi
    let foundSushi = allSushi.find(sushi => 
      sushi.id === parseInt(event.target.id)
      )
      
      if (foundSushi){
        let amount = this.state.funds - foundSushi.price
        if (amount >= 0) {
          foundSushi.img_url = null
          let newArray = [...this.state.sushi, foundSushi] 
          let newPlate = [...this.state.plates, "dish"]
            this.setState({
              sushi: newArray,
              funds: amount,
              plates: newPlate
            })
        }
        else {
          alert("You dont have enough cash!")
        }
      }
  }


      
  
  componentDidMount(){
    fetch('http://localhost:4000/sushis')
    .then(response => response.json())
    .then(data => this.setState({
      sushi: data
    }))
  }

  incrementCounter = (event) => {
    if (this.state.counter === 96){
      this.setState({
        counter: 0
      })
    }
    else{
      this.setState({
        counter: this.state.counter + 4
      })
    }
  }
  
  render() {
    console.log(this.state.plates)
    return (
      <div className="app">
        <SushiContainer eatSushi = {this.eatSushi} counter = {this.state.counter} incrementCounter = {this.incrementCounter} sushi = {this.state.sushi}  />
        <Table funds = {this.state.funds} plates = {this.state.plates}/>
      </div>
    );
  }
}

export default App;