import React from 'react'

const MoreButton = (props) => {
    return <button onClick={(event)=> props.clickedMoreButton(event)}>
            More sushi!
          </button>
}

export default MoreButton