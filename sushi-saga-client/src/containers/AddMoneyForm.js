import React, { Component } from 'react'


class AddMoneyForm extends Component {
    state = {
        budget: undefined
    }

    handleChange = (e) => {
        let adding = parseInt(e.target.value)
        let budget = adding
        this.setState({
            budget
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.budget)
        this.props.update(this.state.budget)
    }

    render() {
        // console.log(this.state.budget)
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input type='number' placeholder="Sushi Wallet!" onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        </div>
        )
    }
}


// const AddMoneyForm = (props) => {
//     return (
//         <div>
//             <form onSubmit={props.add}>
//                 <input type='number' placeholder="Add Money" onChange={props.input}/>
//                 <input type="submit"/>
//             </form>
//         </div>
//     )
// }

export default AddMoneyForm