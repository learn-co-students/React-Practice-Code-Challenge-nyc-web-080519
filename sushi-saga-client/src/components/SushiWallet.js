import React from 'react'

class SushiWallet extends React.Component {
    state = {
        money: ""
    }

    //on change of the money input field, update the state to the new money value
    changeMoney = (e) => {
        this.setState({
            money: e.target.value
        })
    }

    //on submit of the add money form, pass money up to App and reset money in state
    submitMoney = (e) => {
        e.preventDefault()
        //pass current value of money in state up to App to add to total money
        this.props.submitMoneyHandler(this.state.money)
        //reset money back to empty so form looks like it was submitted
        this.setState({
            money: ""
        })
    }

    render() {
        return (
            <div className="wallet">
                <h1>Add More Money</h1>
                {/* on submit of the form, call submitMoney function */}
                <form onSubmit={this.submitMoney}>
                    {/* set value of input to what we have stored in state, onChange, call changeMoney method (which updates the state) */}
                    <input type="number" name="money" placeholder="Money to add..." value={this.state.money} onChange={this.changeMoney} />
                    <input type="submit" />
                </form>
                <br/><br/>
            </div>
        )
    }
}

export default SushiWallet