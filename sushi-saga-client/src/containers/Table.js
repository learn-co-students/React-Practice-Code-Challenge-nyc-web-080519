import React, { Fragment } from 'react'
import Form from '../components/Form';

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * (index) }}/>
    })
  }

    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${props.state.moneyRemaining} remaining!
        <Form addFunds={props.addFunds} />
        </h1>
        <div className="table">
          <div className="stack">
            {

              renderPlates(props.state.purchasedPlates)
            }
          </div>
        </div>
      </Fragment>
    )
  }

export default Table