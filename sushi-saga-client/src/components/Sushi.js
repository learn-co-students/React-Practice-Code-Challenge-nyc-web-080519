import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(e, price) => props.eatSushi(e, props.price)}>
        { 
          /* Tell me if this sushi has been eaten! */
          props.eatenSushi.find((sush) => {
            return sush.id === parseInt(props.id)
          })
          ?
            null
          :
            <img id={props.id} src={props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi