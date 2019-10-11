import React from 'react'

const MoreButton = (props) => {
  //on click of the more sushi button, call the moreClickHandler function which was sent down as a prop
    return <button onClick={props.moreClickHandler}>
            More sushi!
          </button>
}

export default MoreButton