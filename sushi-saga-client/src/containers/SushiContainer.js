import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {

  render() {
    // let gone = [...this.props.gone]
    // if(gone.length !== 0){
    //   let sushiToRemove = gone[0]
    //   let newSushi = this.props.sushi.indexOf(sushiToRemove)
    //   let newArr = this.props.sushi.splice(newSushi, 1)
    //   console.log(newArr.length)
    //   let sushiProps = this.props.sushi
      let sushiProps = this.props.sushi.map(sushiObj => < Sushi key={sushiObj.id} sushi={sushiObj} eatSushi={this.props.eatSushi} />)
    // }
    
    return (
      <React.Fragment>
        <div className="belt">
          {sushiProps}
          <MoreButton more={this.props.moreSushi} />
        </div>
      </React.Fragment>
    )
  }
}


// const SushiContainer = (props) => {
//   let sushiProps = props.sushi.filter(sushiObj => !props.gone.includes(sushiObj))
//   console.log(sushiProps)
//   sushiProps = props.sushi.map(sushiObj => < Sushi key={sushiObj.id} sushi={sushiObj} eatSushi={props.eatSushi} />)
//   return (
//     <Fragment>
//       <div className="belt">
//         {sushiProps}
//         <MoreButton more={props.moreSushi} />
//       </div>
//     </Fragment>
//   )
// }

export default SushiContainer