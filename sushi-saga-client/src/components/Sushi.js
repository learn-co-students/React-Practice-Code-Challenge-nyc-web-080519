import React from 'react'

class Sushi extends React.Component {
  state = {
    eaten: false
  }

  
  render() {
    const buyPlateHandler = () => {
      if ((this.props.state.moneyRemaining - this.props.sushi.price >= 0) && (this.state.eaten === false)) {
      this.setState({
        eaten: true
      })
      this.props.purchasedPlate(this.props.sushi.price)
    }
  }

    return (
      <div className="sushi">
        <div className="plate"  onClick={buyPlateHandler}>
          {  this.state.eaten === true ? null : <img src={this.props.sushi.img_url} alt="" width="100%" />  }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi