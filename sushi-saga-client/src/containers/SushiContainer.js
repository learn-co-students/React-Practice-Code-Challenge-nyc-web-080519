import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

class SushiContainer extends React.Component {
  state = {counter: 0}

  //need to display only 4 sushi at a time --start with first 4 ✅
  //clicking on the MoreButton should trigger a call back that renders the next 4 sushi in array ✅
  //should the counter be in state in App or state on the sushi container??

  handleMoreButtonClick = () => {
    let counterCopy = this.state.counter
    counterCopy +=4
    if (counterCopy >= this.props.sushi.length)  {counterCopy = 0 }
    this.setState({counter: counterCopy})
  }

  //figure out how to get the sushi to cycle through
  displayFourSushi = () => {
    let counterCopy = this.state.counter;
    let copy = [...this.props.sushi]
    let fourSushi = copy.splice(counterCopy, 4)
    return fourSushi
  }
  
  render() {
    let displaySushis = this.displayFourSushi().map(sushiObj => <Sushi key={sushiObj.id} sushi={sushiObj} eatSushi={this.props.eatSushi}/>)
    
    return (
      <Fragment>
        <div className="belt">

          {displaySushis}

          <MoreButton handleMoreButtonClick={this.handleMoreButtonClick}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer