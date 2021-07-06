import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={event => props.sushiClick(props.id, props.price)}>
        { 
          props.eaten ?
            null
          :
            <img alt="" src={props.image} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi