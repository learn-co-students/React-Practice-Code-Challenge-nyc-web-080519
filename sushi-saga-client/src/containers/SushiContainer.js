import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  //storing the first and last sushi we are up to rendering in state
  state = {
    first: 0,
    last: 4
  }

  //make a sushi component for each sushi we went down in props
  makeSushi = () => {
    //only passing 4 sushis at a time, based on where we currently are in the sushis array (first and last from state)
    //in addition to all of the sushi attributes, passing the sushiClickHandler function and eatenSushis array props down again
    return this.props.sushis.slice(this.state.first,this.state.last).map(sushi => <Sushi key={sushi.id} sushi={sushi} sushiClickHandler={this.props.sushiClickHandler} eatenSushis={this.props.eatenSushis} />)
  }

  //on click of the more sushi button (component lives within sushi container)
  //increase first and last in state by 4, so we can render the next 4 sushi in the array
  moreClickHandler = () => {
    //handle wraparound by modding the new first/last values by the length of the array
    let numSushi = this.props.sushis.length
    let newFirst = (this.state.first + 4) % numSushi
    let newLast = (this.state.last + 4) % numSushi
    //if newLast is 0, that means the actual new last is the length of the sushis array (100) and 100 % 100 is 0
    //won't work if the last is after the first (first will be 96, last will be 0), so need to reset newLast back to 100
    if (newLast === 0) {
      newLast = numSushi
    }
    this.setState({
      first: newFirst,
      last: newLast
    })
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.makeSushi()}
          <MoreButton moreClickHandler={this.moreClickHandler} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer