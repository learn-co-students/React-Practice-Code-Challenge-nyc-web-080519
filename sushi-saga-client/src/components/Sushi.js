import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log(props.true)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={props.eatSushi}>
            { 
              /* Tell me if this sushi has been eaten! */ 
              props.eaten === true ? null:  <img alt="" id={props.info.id} src={props.info.img_url} width="100%" />
            }
      </div>
      <h4 className="sushi-details">
        {props.info.name} - ${props.info.price}
      </h4>
    </div>
  )
}

export default Sushi