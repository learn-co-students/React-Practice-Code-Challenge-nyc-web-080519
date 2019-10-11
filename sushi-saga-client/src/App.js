import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"
// Endpoint!

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      sushiArr: [],
      purchasedPlates: [],
      plates: 0,
      moneyRemaining: 100,
      sliceStart: 0,
      sliceEnd: 4
    }
  }

  fetchData = () => {
    fetch(API)
    .then( resp => resp.json())
    .then( response => {
      this.setState({
        sushiArr: response
      })
    })
  }

  
  componentDidMount = () => {
    this.fetchData()
  }

  
  moreButtonHandler = () => {
    if ( this.state.sliceEnd === (this.state.sushiArr.length)) {
      this.setState({
        sliceStart: 0,
        sliceEnd: 4})
    } else {
      let newSliceStart = this.state.sliceStart + 4
      let newSliceEnd = this.state.sliceEnd + 4
      this.setState({
        sliceStart: newSliceStart,
        sliceEnd: newSliceEnd
      })
    }
  }

  purchasedPlate = (price) => {
    
    let newPlateCountArr = [...this.state.purchasedPlates, price]
    let newMoneyRemaining = this.state.moneyRemaining - price
    this.setState({
      purchasedPlates: newPlateCountArr,
      moneyRemaining: newMoneyRemaining
    })  
  }

  addFunds = (amtToAdd) => {

    console.log(amtToAdd)
    let newMoneyRemaining = this.state.moneyRemaining + parseInt(amtToAdd)
    this.setState({
      moneyRemaining: newMoneyRemaining
    })
  }


  render() {
    
    

    return (
      <div className="app">
        <SushiContainer  sushiArr={this.state.sushiArr.slice(this.state.sliceStart,this.state.sliceEnd)} 
                        moreButtonHandler={this.moreButtonHandler} 
                        purchasedPlate={this.purchasedPlate}
                        state={this.state}
                        />
        <Table key="1" state={this.state} addFunds={this.addFunds}/>
      </div>
    );
  }
}

export default App;