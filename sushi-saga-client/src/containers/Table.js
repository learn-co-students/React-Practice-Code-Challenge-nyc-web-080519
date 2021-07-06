import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((plate, index) => {
      return <div key={plate.id} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.balance} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eatenSushi)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table

// has to know how much $$
// has to know how many plates