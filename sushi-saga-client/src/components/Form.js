import React from 'react'


class Form extends React.Component {

  state = {
    funds: ""
  }

  addFundsChange = (event) => {
      this.setState({
        funds: parseInt(event.target.value)
      })
  }

  addFunds = (event) => {
    event.preventDefault()
    this.props.addFunds(parseInt(this.state.funds)) 
    this.setState({
      funds: ""
    })
  }
  
  render() {
    return(
      <form >
        $<input name="addmoney" type="number" onChange={this.addFundsChange}  value={this.state.funds} />
        <button type="submit"  onClick={(event) => this.addFunds(event)}>Add More Funds</button>
        {/* <button type="submit"  onSubmit={(event) => console.log(event)   }>Submit</button> */}
      </form>
    )

  }

}

export default Form